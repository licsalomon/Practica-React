import React,{Component} from "react"
import Productos from "./Productos"
import Boton1 from "./Boton1"
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            productos:[],
            loading:true,
            titulo:"Home",
            mensaje:""
        }
            }
        componentDidMount(){
            fetch("https://jsonfy.com/items")
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    productos:data,
                    loading:false
                })
            })
        }
            //comprar = ()=>{
                // this.setState({
                //     compra:"Gracias por su compra"
                     
                // })
            //}
        
    render(){
      
            if(this.state.loading){
                return(
                 <div>
                loading...
                </div>
                )
            }else{
                return(
                    <div> 
                        <div>Bienvenido a: {this.props.titulo}</div>
                        <p>Aquí podrá ver nuestros productos</p>
                {this.state.productos.map(producto =><Productos data={producto} />)}
                <p>Próximamente aquí encontrará más productos...</p>               
                </div>
                 )
                }
            }
                
                
   
    
}
export default Home;
