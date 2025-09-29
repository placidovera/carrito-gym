import { useContext, useState, useEffect } from "react"
import { CarritoContext } from "../context/CarritoContext"
import "./Checkout.css"
import { db } from "../Services/Config"
import { addDoc, collection, updateDoc, doc, getDoc } from "firebase/firestore"
import Confetti from "react-confetti"

const Checkout = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirmacion, setEmailConfirmacion] = useState("")
  const [error, setError] = useState("")
  const [ordenId, setOrdenId] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)

  const { carrito, vaciarCarrito, total } = useContext(CarritoContext)

  const manejadorFormulario = async (event) => {
    event.preventDefault()

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor complete todos los campos")
      return
    }
    if (email !== emailConfirmacion) {
      setError("Los campos de email no coinciden")
      return
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total,
      fecha: new Date(),
      nombre,
      apellido,
      email,
    }

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id)
        const productoDoc = await getDoc(productoRef)
        const stockActual = productoDoc.data().stock

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        })
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id)
            vaciarCarrito()
            setShowConfetti(true) 
          })
          .catch((error) => {
            console.log("Error al crear la orden:", error)
            setError("Se produjo un error al crear la orden!!")
          })
      })
  }

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showConfetti])

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
    style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, pointerEvents: "none" }}
  />
)}


      <h1>Orden De Pedido</h1>
      <form onSubmit={manejadorFormulario}>
        <label>Nombre</label>
        <input type="text" placeholder="Ej: Martin" onChange={(e) => setNombre(e.target.value)} />

        <label>Apellido</label>
        <input type="text" placeholder="Ej: Vera" onChange={(e) => setApellido(e.target.value)} />

        <label>Telefono</label>
        <input type="text" placeholder="Ej: 3434577393" onChange={(e) => setTelefono(e.target.value)} />

        <label>Email</label>
        <input type="email" placeholder="Ej: martin@correo.com" onChange={(e) => setEmail(e.target.value)} />

        <label>Repite tu Email</label>
        <input type="email" placeholder="Repite tu email" onChange={(e) => setEmailConfirmacion(e.target.value)} />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Confirmar Compra</button>

        {ordenId && (
          <strong style={{ color: "white" }}>
            Gracias por su compra!! Su número de orden es: {ordenId}
          </strong>
        )}
      </form>
    </div>
  )
}

export default Checkout
