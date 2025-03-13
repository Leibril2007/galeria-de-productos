//Consultas al backend y a la API

async function productosAPI() {
    
    try{

        // consulta a la api
        const response = await fetch("https://fakestoreapi.com/products");
        //lo convierte a json
        const data = await response.json();
        return data;

    }catch(error){
        console.error("error:", error);
    }

}


export { productosAPI }