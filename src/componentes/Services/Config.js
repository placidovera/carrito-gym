// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

export default firebaseConfig;


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)



const productosGym = [

{
  nombre: "Fernet Branca",
  precio: 15000,
  stock: 102,
  img: "/imagenes/branca.png",
  idCat: "botellas",
  descripcion: "Fernet Branca | Peso Neto: 1.203 kg | Volumen: 750 ml | Amaro italiano elaborado con más de 27 hierbas y especias provenientes de cuatro continentes. Su sabor es intenso, amargo y herbal, ideal para disfrutar solo o con gaseosa cola."
},

{ 
  nombre: "Gancia", 
  precio: 17000, 
  stock: 200, 
  img: "/imagenes/ganciaSprite.png", 
  idCat: "promos",
   descripcion: "Aperitivo Gancia Unidades:1| Peso Neto: 1.203 kg | Volumen: 750 ml |Gaseosas Sprite Unidades:2| Peso Neto: 1.5 kg | Volumen: 1500 ml"
},
{
  nombre: "Patagonia Cerveza Lata x6",
  precio: 8500,
  stock: 45,
  img: "/imagenes/patagoniaPack.png",
  idCat: "latas",
  descripcion: "Cerveza Patagonia | Pack de 6 latas | Peso Neto: 2.1 kg | Volumen total: 3540 ml (6 x 590 ml)"
},
{
  nombre: "Damonjag",
  precio: 9500,
  stock: 88,
  img: "/imagenes/damonjag.png",
  idCat: "botellas",
  descripcion: "Licor herbal Damonjag | Peso Neto: 1.2 kg | Volumen: 1000 ml | Graduación alcohólica: 30% vol"
},
{
  nombre: "Gancia Spritz",
  precio: 8700,
  stock: 76,
  img: "/imagenes/ganciaSpritz.png",
  idCat: "botellas",
  descripcion: "Aperitivo Gancia Spritz | Peso Neto: 1.3 kg | Volumen: 950 ml | Aperitivo a base de vino blanco, con notas cítricas y amargas, ideal para preparar cócteles refrescantes."
},
{
  "nombre": "Red Bitter",
  "precio": 12000,
  "stock": 85,
  "img": "/imagenes/redBitter.png",
  "idCat": "botellas",
  "descripcion": "Aperitivo amargo con notas herbales | Peso Neto: 0.750 kg | Volumen: 750 ml | Ideal para cócteles y brindis"
},
{
  "nombre": "Vodka Skyy",
  "precio": 18000,
  "stock": 120,
  "img": "/imagenes/vodkaSky.png",
  "idCat": "botellas",
  "descripcion": "Vodka premium de sabor suave y puro | Peso Neto: 1 kg | Volumen: 1 L | Ideal para coctelería y consumo directo"
}
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

