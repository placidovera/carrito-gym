const productosGym = [
  { id: 1, nombre: "Proteína STAR", precio: 30000, stock: 15,img: "/imagenes/proteinaWhey.png", idCat: "proteinas" },
  { id: 2, nombre: "Proteína ENA", precio: 30000, stock: 12, img: "/imagenes/proteinaEna.png", idCat: "proteinas" },
  { id: 3, nombre: "Proteína", precio: 30000, stock: 20, img: "/imagenes/proteinaStar.png", idCat: "proteinas" },
  { id: 4, nombre: "Creatina Monohidratada", stock: 10, precio: 18000, img: "/imagenes/proteinaHardCore.png", idCat: "creatinas" }, 
  { id: 5, nombre: "Creatina Monohidratada", stock: 10, precio: 18000, img: "/imagenes/creatinaEna.png", idCat: "creatinas" }, 
  { id: 6, nombre: "Creatina Monohidratada", stock: 10, precio: 18000, img: "/imagenes/wheyProteina.png", idCat: "creatinas" }, 
  { id: 7, nombre: "Creatina Monohidratada", stock: 15, precio: 18000, img: "/imagenes/creatinaStar.png", idCat: "creatinas" }, 
  { id: 8, nombre: "Quemador de grasa Ena",  stock: 12,precio: 25000, img: "/imagenes/quemadorEna.png", idCat: "proteinas" },
  { id: 9, nombre: "Quemador de grasa Ripped", stock: 10, precio: 25000, img: "/imagenes/quemadorRipped.png", idCat: "quemadores" },
  { id: 10, nombre: "Quemador de grasa Tauro", stock: 20, precio: 5000, img: "/imagenes/quemadorTauro.png", idCat: "quemadores" },
  { id: 11, nombre: "Quemador de grasa Star", stock: 12, precio: 6000, img: "/imagenes/quemadorStar.png", idCat: "quemadores" },
  { id: 12, nombre: "Quemador de grasa Ena",  stock: 15,precio: 6000, img: "/imagenes/preEntrenoStar.png", idCat: "quemadores" },
  { id: 13, nombre: "Quemador de grasa Ena", stock: 5, precio: 6000, img: "/imagenes/preEntrenoRipped.png", idCat: "quemadores" },
]

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productosGym);
    }, 100); 
  });
};
export const getUnProducto = (id)=>{
return new Promise(resolve=>{
  setTimeout(()=> {
    const producto = productosGym.find(item => item.id === Number(id))
    resolve(producto)
  },100)
})
}
export const getProductosPorCategoria=(idCategoria)=>{
  return new Promise(resolve=>{
    setTimeout(()=> {
      const productosCategoria = productosGym.filter(item =>item.idCat === idCategoria)
      resolve(productosCategoria)
  },100)  
  })
}