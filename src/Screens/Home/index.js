import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../Components/Card';
import Product from '../../Components/Product';
import Api from '../../server/index'


export default function HomeScreen(props) {
  
    const [data, setData] = useState([])
    const [search, setSearch] = useState()

    const api = new Api('https://back-ppe.herokuapp.com/')

    /**
     * busca por produtos
     */
    async function searchProduct(product){
        const res = await api.searchProduct('/produtos/', product)

        /**
         * há uma certa demora na busca do produto, teremos que colocar alguma referencia visual de carregamento futuramente
         */
        if(res.data.data.length > 1){
            console.log(res.data.data)
            setData(res.data.data)
        }else{
            alert(`Desculpe, não temos esse produto no momento.`)
        }
        }   
      
     /**
      * retorno de todos os produtos
      */
    async function showRoutes(){
        const res  = await api.getProduct('/produtos')
        setData(res.data.data)
        }
   /**
    * necessário para inicializar o array de produtos
    */     

    useEffect(()=>{
    showRoutes()
    },[])

    
    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.content}>
                <View style={styles.searchContainer}>
                <TextInput style={styles.search} placeholder="Pesquisar"  onChangeText={setSearch} onBlur={ e => searchProduct(search)}/>
                </View>
               

                <View style={styles.scrollProducts}>
                    <ScrollView horizontal={false}>
                        <View style={styles.scrollArea}>
                            <Text style={styles.sugestionText}>Sugestão para você</Text>
                            <ScrollView
                                style={styles.scroll}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                decelerationRate="fast">
                                {  
                                   data.map((e) => <Card key={e._id} img={e.img} name={e.name} />) 
                                }
                            </ScrollView>
                        </View>
                        
                       <View style={{
                           width:'100%',
                           alignItems:'center'
                       }}>
                        <Text style={styles.productInitialText}>Produtos</Text>
                        {
                          data.map((e) => <Product preco={e.preco} name={e.name} key={e._id} img={e.img}  id={e._id}/>) 
                        }
                       </View>
                    </ScrollView>
                    
                    
                                
                </View>
            </View>

        </SafeAreaView>
    )


}