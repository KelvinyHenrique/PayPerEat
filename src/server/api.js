const Api = require('./index')

const api  =  new Api('https://back-ppe.herokuapp.com/')


async function showRoutes(){
 const res  = await api.getProduct('/produtos')
 console.log(res.data)
}
//showRoutes()

async function setProd(){
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

//setProd()