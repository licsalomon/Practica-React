import React,{Component} from "react"
import Boton1 from "./Boton1"
function Productos (props){
    const {name, description, price, stock} =props.data
    return(
            
        <div>
            <div>Nombre: {name}</div>
            <div>Descripción: {description}</div>
            <div>Precio: {price}</div>
            <div>Cantidad disponible: {stock}</div>
            <Boton1/>
            </div>
    );
}

// class Productos extends Component{
//     constructor(props){
//         super(props)
//             }
            
      
//     render(){
//         return(
            
//             <div>
//                 <div>Nombre: {this.props.data.name}</div>
//                 <div>Descripción: {this.props.data.description}</div>
//                 <div>Precio: {this.props.data.price}</div>
//                 <div>Cantidad disponible: {this.props.data.stock}</div>
//                 <Boton1/>
//                 </div>
//         )
//     }
//}

export default Productos;
