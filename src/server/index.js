const axios = require('axios') 


module.exports = class Api{
    
    constructor(url){
        this.url = url
        this.api = axios.create({ baseURL: url})
    }
     /**
      * Retorna todos os produtos
      * 
      * exemplo de implementação: 
      * async function showRoutes(){
              const res  = await api.getProduct('/produtos')
              console.log(res.data)
              }
             showRoutes()
      * 
      */
     async getProduct( route ){
        const res = await this.api.get(route).then((e)=>{
        return e
        }).catch((err)=> err)
        return res  
    }
   
    /**
     *  Insere um novo produto no banco de dados 
     *  exemplo: 
     * 
     * async function setProd(){
       const data = {
        "name": "Banana",
        "img": "https://avatars2.githubusercontent.com/u/5342402?s=400&v=4",
        "user_produtor": "John",
        "itens_vendidos": 3,
        "preco": 2,
        "estoque": 0,
        "unidade_vendida": "unidade"
      }

     const res = await api.setProduct('/produtos', data)
     console.log(res.data)

     }
     */

    async setProduct( route, data ){
        const set = await this.api.post(route, {
            data
        }).then((e) => { return e }).catch((err)=> err)

        return set
    }
/**
     * Pesquisa por produtos
     * 
    async function searchProduct(product){
    const res = await api.searchProduct('/produtos/', product)
    console.log(res.data) 
    }   
    searchProduct('banana')
     */

    async searchProduct(route, product){
        const get = await this.api.get(route + product)
        .then((e)=> { return e}).catch((err) => err)
        return get

     }
     /**
     * Pesquisa por produtos
     * 
    async function searchProduct(product){
    const res = await api.searchProduct('/produtos/', product)
    console.log(res.data) 
    }   
    searchProduct('banana')
     */

    async searchProduct(route, product){
        const get = await this.api.get(route + product)
        .then((e)=> { return e}).catch((err) => err)
        return get

     }

}
