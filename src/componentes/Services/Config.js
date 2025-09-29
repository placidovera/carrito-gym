// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsNtI2cw2jZjy7iiH139gGLdhIf7eFZbo",
  authDomain: "creatulanding-f0da4.firebaseapp.com",
  projectId: "creatulanding-f0da4",
  storageBucket: "creatulanding-f0da4.firebasestorage.app",
  messagingSenderId: "531076371384",
  appId: "1:531076371384:web:8b88522154408cac93354d",
  measurementId: "G-SLLZZWQG92"
};

const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)


const productosGym = [

{ 
  nombre: "Proteína ENA Truemade", 
  precio: 28000, 
  stock: 12, 
  img: "/imagenes/proteinaEna.png", 
  idCat: "proteinas",
  descripcion: "Truemade Whey Protein – Cookies & Cream | Marca: ENA | Peso Neto: 2.65 LB (1.203 g) | Porciones: 30 | Proteína por porción: 25 g | Incluye 5.81 g de BCAA | Nueva fórmula | Aislado y concentrado | Sabor: Cookies & Cream"
},
{ 
  nombre: "Proteína STAR Whey Micro Filtered", 
  precio: 27000, 
  stock: 20, 
  img: "/imagenes/proteinaWhey.png", 
  idCat: "proteinas",
  descripcion: "Whey Protein Micro Filtered | Marca: Star Nutrition | Peso Neto: 2 LB (908 g) | Porciones: 30 | Proteína por porción: 25 g | 8.89 g BCAA por servicio | Instantánea para fácil disolución"
},
{ 
  nombre: "Proteína STAR Platinum Whey", 
  precio: 30000, 
  stock: 15, 
  img: "/imagenes/proteinaStar.png", 
  idCat: "proteinas",
  descripcion: "Platinum Whey Protein – Cookies & Cream | Marca: Star Nutrition | Peso Neto: 2 LB (903 g) | Porciones: 30 | Proteína por porción: 25 g | Fórmula nueva y mejorada | Aislado, hidrolizado y ultra concentrado | Microfiltrado para mejor absorción | Sabor: Cookies & Cream"
},
{ 
  nombre: "Creatina ENA Micronizada + Shaker", 
  precio: 20000, 
  stock: 25, 
  img: "/imagenes/creatinaEna.png", 
  idCat: "creatinas",
  descripcion: "Creatina Micronizada ENA | Pure Creatine | 60 servicios | 5 g de creatina por porción | 100% pureza | Incluye shaker Legend para preparar tus batidos"
},
{ 
  nombre: "HardCore Whey Protein 1KG", 
  precio: 28000, 
  stock: 30, 
  img: "/imagenes/wheyProteina.png", 
  idCat: "proteinas",
  descripcion: "HardCore Whey Protein | Ultra Whey Gold Quality | 1KG (2.2lbs) | Ideal para aumentar masa muscular y acelerar la recuperación"
},
{
  nombre: "Creatine Monohydrate Gold Nutrition 300g",
  precio: 14500,
  stock: 40,
  img: "/imagenes/creatinaStar.png",
  idCat: "creatinas",
  descripcion: "Creatine Monohydrate | Gold Nutrition Black Line | 300g (60 dosis) | Mejora fuerza, potencia y rendimiento | 100% pura y testeada contra sustancias prohibidas"
},
{
  nombre: "Carnitina ENA 1500mg 60 caps",
  precio: 9800,
  stock: 25,
  img: "/imagenes/quemadorEna.png",
  idCat: "quemadores",
  descripcion: "Carnitina ENA | 1500mg por cápsula | 60 cápsulas | Apoya el metabolismo de grasas y mejora la energía durante el entrenamiento"
},
 {
  nombre: "Quemador Ripped ENA 60 caps",
  precio: 11200,
  stock: 20,
  img: "/imagenes/quemadorRipped.png",
  idCat: "quemadores",
  descripcion: "Ripped Ultimate Fat Burner de ENA | 60 cápsulas | Fórmula avanzada con té verde y naranja amarga | Ideal para definición y control de peso | Suplemento oficial de la Unión Argentina de Rugby"
},
{
  nombre: "Pre-Workout Taurus Pulver 400g",
  precio: 8900,
  stock: 18,
  img: "/imagenes/quemadorTauro.png",
  idCat: "preentrenos",
  descripcion: "Taurus Pre-Workout de Pulver | 400g | Sabor naranja | Con L-Arginina, L-Glutamina, Maltodextrina, Taurina, L-Leucina y Vitamina C | Libre de gluten | Ideal para potenciar energía y rendimiento físico"
},
{
  nombre: "Pre-Workout V8 Nextgen Star Nutrition 285g",
  precio: 10200,
  stock: 22,
  img: "/imagenes/quemadorStar.png",
  idCat: "preentrenos",
  descripcion: "V8 Nextgen de Star Nutrition | 285g | Sabor Grape Attack | Con cafeína, guaraná, vitaminas B9 y B12 | Libre de gluten y sin azúcar | Ideal para mejorar el rendimiento, la energía y la congestión muscular"
},
{
  nombre: "Pre-Workout Pre War ENA 400g",
  precio: 10900,
  stock: 20,
  img: "/imagenes/preEntrenoStar.png",
  idCat: "preentrenos",
  descripcion: "Pre War de ENA | 400g | Sabor Fruit Punch | Con 3g de Beta-Alanina y 3g de Creatina por porción | Potencia el rendimiento, la fuerza y la resistencia | Libre de gluten | Ideal para entrenamientos intensos"
},
 {
  nombre: "Pre-Workout PRE.N.O. Explosive Ripped Ultra Tech 360g",
  precio: 11500,
  stock: 16,
  img: "/imagenes/preEntrenoRipped.png",
  idCat: "preentrenos",
  descripcion: "PRE.N.O. Explosive Ripped de Ultra Tech | 360g | Sabor mango | Con cafeína, café verde, L-carnitina, L-arginina, guaraná y aminoácidos | Ideal para energía explosiva, quema de grasa y rendimiento avanzado"
},
]

import { collection,doc,writeBatch } from "firebase/firestore";
const subirProductos =async()=>{
const batch = writeBatch(db);
const productosRef = collection(db,"productos");

productosGym.forEach((producto)=>{
  const nuevoDoc = doc(productosRef);
  batch.set(nuevoDoc,producto);
});
try{
  await batch.commit();
  console.log("productos subidos exitosamente");
}catch(error){
  console.log("Error subiendo productos",error)
}
};
// subirProductos()