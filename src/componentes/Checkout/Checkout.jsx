import { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "./Checkout.css";
import { db } from "../Services/Config";
import { addDoc, collection, doc, runTransaction } from "firebase/firestore";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  // Función para abrir WhatsApp con mensaje
  const enviarWhatsApp = (numero, mensaje) => {
    const texto = encodeURIComponent(mensaje);
    window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
  };

  const manejadorFormulario = async (event) => {
    event.preventDefault();
    setError(""); // Limpiar errores previos

    if (!nombre || !apellido || !telefono || !direccion) {
      setError("Por favor complete todos los campos");
      return;
    }

    const orden = {
      nombre,
      apellido,
      telefono,
      direccion,
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        descripcion: producto.item.descripcion || "",
        cantidad: producto.cantidad,
        precio: producto.item.precio,
      })),
      total,
      fecha: new Date(),
    };

    try {
      // Actualizar stock usando transacciones
      await Promise.all(
        orden.items.map(async (productoOrden) => {
          const productoRef = doc(db, "productos", productoOrden.id);

          await runTransaction(db, async (transaction) => {
            const productoDoc = await transaction.get(productoRef);
            if (!productoDoc.exists()) throw `El producto ${productoOrden.nombre} no existe`;

            const stockActual = productoDoc.data().stock;

            if (stockActual < productoOrden.cantidad) {
              throw `No hay suficiente stock de ${productoOrden.nombre} (Disponible: ${stockActual})`;
            }

            transaction.update(productoRef, {
              stock: stockActual - productoOrden.cantidad,
            });
          });
        })
      );

      // Crear la orden en Firestore
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      setOrdenId(docRef.id);
      vaciarCarrito();
      setShowConfetti(true);

      // Abrir WhatsApp automáticamente con detalles de la orden
      let mensajeWhatsApp = `Nueva orden #${docRef.id} de ${nombre} ${apellido}.\nDirección: ${direccion}\nTotal: $${total}\nProductos:\n`;
      orden.items.forEach((item) => {
        mensajeWhatsApp += `- ${item.nombre}: ${item.descripcion} x${item.cantidad} ($${item.precio})\n`;
      });

      enviarWhatsApp("543434577393", mensajeWhatsApp); // reemplaza con tu número
    } catch (err) {
      console.log("Error al crear la orden:", err);
      setError(typeof err === "string" ? err : "Se produjo un error al crear la orden!");
    }
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div style={{ position: "relative" }}>
      {showConfetti && (
        <Confetti
          numberOfPieces={500}
          recycle={false}
          gravity={0.2}
          initialVelocityY={-20}
          initialVelocityX={15}
          colors={["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"]}
          width={window.innerWidth}
          height={window.innerHeight}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}

      <h1>Orden De Pedido</h1>
      <form onSubmit={manejadorFormulario}>
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Ej: Martin"
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Apellido</label>
        <input
          type="text"
          placeholder="Ej: Vera"
          onChange={(e) => setApellido(e.target.value)}
        />

        <label>Teléfono</label>
        <input
          type="text"
          placeholder="Ej: 3434577393"
          onChange={(e) => setTelefono(e.target.value)}
        />

        <label>Dirección</label>
        <input
          type="text"
          placeholder="Ej: Calle Falsa 123"
          onChange={(e) => setDireccion(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Confirmar Compra</button>
        <Link to="/">
          <button type="button">Volver al Inicio</button>
        </Link>

        {ordenId && (
          <strong style={{ color: "white" }}>
            Gracias por su compra!! Su número de orden es: {ordenId}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;
