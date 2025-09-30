import { BrowserRouter ,Route,Routes} from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import { CarritoProvider } from "./componentes/context/CarritoContext"
import Cart from "./componentes/Cart/Cart"
import Checkout from "./componentes/Checkout/Checkout"

const App = () => {
  return (
     <>
    <BrowserRouter>
    <CarritoProvider>
 <NavBar />
    <Routes>
      <Route path="/" element={  <ItemListContainer texto="Today is the moment" />}></Route>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer />}></Route>
      <Route path="/item/:idItem/" element={<ItemDetailContainer />}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
    </Routes>
   </CarritoProvider>
</BrowserRouter>
 </>
  )
}

export default App
