import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import ProductCart from '../../Components/ProductCart';
import { ScrollView } from 'react-native-gesture-handler';
import DefaultButton from '../../Components/DefaultButton';
import styled from 'styled-components';
import { Button } from 'react-native-paper';
import { AsyncStorage } from 'react-native';


import Api from '../../server/index'

const TotalAmount = styled.View`
    width:85%;
    height:60px;
    flexDirection:row;
    alignItems:center;
    justifyContent:space-between;
`;  
const TextAmount = styled.Text`
    fontSize:15px;
    color:#9B9B9B;
`;
const TotalValue = styled.Text`
    fontSize:18px;
    fontWeight:bold;
`;

const api = new Api('https://back-ppe.herokuapp.com/')


export default function Cart() {

const [data, setData] = useState([])


const dat = async () => {
    let data; 
    try {
         data = await AsyncStorage.getItem('DATA') || [];
        } catch (error) {
        console.log(error.message);
    }return data;
}
   

async function showRoutes(){
        let res  = await api.getProduct('/produtos')
        res = res.data.data
        let filt = await dat()
        filt = filt.split(',')

        const send = res.filter((e) => filt.indexOf(e._id) != -1 )

        setData(send)
        
        }
   /**
    * necessário para inicializar o array de produtos
    */     

useEffect(()=>{
    showRoutes()
    },[])

    console.log(data)

    return (
        <SafeAreaView style={{
            marginTop: 15,
            alignItems: 'center'
        }}>
            <ScrollView horizontal={false} style={{
                width: '100%',
                height: '81%',
            }}>
                {
                    data.map((e)=> <ProductCart amount="1" key={e._id} img={e.img} name={e.name} price={e.preco} />)}

            </ScrollView>
            <View style={{
                width:'100%',
                alignItems:'center'
            }}>
                <TotalAmount>
                    <TextAmount>Valor Total:</TextAmount>
                    <TotalValue>R$ 50,00</TotalValue>
                </TotalAmount>
              <DefaultButton width="90%" height="50px" name="FINALIZAR COMPRA" goToScreen="Checkout"/>
            </View>
            
        </SafeAreaView>
    )
}