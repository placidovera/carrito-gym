import { BrowserRouter ,Route,Routes} from "react-router-dom"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"


const App = () => {
  return (
    <BrowserRouter>
  <><NavBar />
    <Routes>
      <Route path="/" element={  <ItemListContainer texto="Today is the moment" />}></Route>
      <Route path="/categoria/:idCategoria" element={<ItemListContainer />}></Route>
      <Route path="/item/:idItem/" element={<ItemDetailContainer />}></Route>
    </Routes>
    </>
</BrowserRouter>
  )
}

export default App
