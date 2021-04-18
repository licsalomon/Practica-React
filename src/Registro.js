import React,{Component} from "react"
function Registro (){
    return(
        <form>
           <label>Nombre</label>
           <input type="nombre"></input>
           <label>Apellido</label>
           <input type="apellido"></input>
           <label>Email</label>
           <input type="email"></input>
           <label>Teléfono</label>
           <input type="telefono"></input>
           <label>Password</label>
           <input type="password"></input>
           <label>Confirmar password</label>
           <input type="confirmarpsd"></input>
       </form>
    )
}
// class Registro extends Component{
//         render(){
//         return(
//              <form>
//                 <label>Nombre</label>
//                 <input type="nombre"></input>
//                 <label>Apellido</label>
//                 <input type="apellido"></input>
//                 <label>Email</label>
//                 <input type="email"></input>
//                 <label>Teléfono</label>
//                 <input type="telefono"></input>
//                 <label>Password</label>
//                 <input type="password"></input>
//                 <label>Confirmar password</label>
//                 <input type="confirmarpsd"></input>
//             </form>
//         )
//     }
// }
export default Registro;
