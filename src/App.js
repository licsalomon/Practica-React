import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import Home from "./Home"
import Menu from "./Menu"
import Registro from "./Registro"
import Productos from "./Productos"
import Nosotros from "./Nosotros"
function App() {
    return (
      <BrowserRouter>
      <Menu />
      <Route path="/" component={Home} exact />
      <Route path="/registro" component={Registro} exact />
      <Route path="/nosotros" component={Nosotros} exact />
          
      </BrowserRouter>
   
  );
}

export default App;


