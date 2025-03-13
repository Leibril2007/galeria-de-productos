import { productosAPI } from "../services/api.js";
import { crearProducto } from "../moduls/productos.js";


async function mostrarProductos() {
    
    try{

        let datos = await productosAPI();
        console.log(datos);
        todosLosProductos(datos);

    }catch(error){
        console.error("error:", error);
    }

}

function todosLosProductos(data){

    let DOM = document.querySelector("#root");


    data.forEach(element => {
        console.log(element);

        DOM.appendChild(crearProducto(element.image, element.title, element.price, element.description))
    });


}


export { mostrarProductos } 