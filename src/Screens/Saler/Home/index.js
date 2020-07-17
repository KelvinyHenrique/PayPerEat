import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Orders from '../../../Components/SalerComponents/Orders';
import styled from 'styled-components';
import ActionBox from '../../../Components/SalerComponents/ActionBox';


const BoxDashoard = styled.View`
    width:100%;
    flexDirection:column;
`;
const LastOrdersScroll = styled.ScrollView`
`;

const BoxActions = styled.View`
    width:100%;
    marginLeft:10px;
    alignItems:center;
    flexDirection:row;
    flexWrap:wrap;
`;


export default function HomeScreen() {

    const TextLastOrders = styled.Text`
    marginLeft:20px;
    marginTop:20px;
    fontSize:18px;
`;

    return (
        <SafeAreaView>
            
        <BoxDashoard>
            <TextLastOrders>Últimos Pedidos</TextLastOrders>
            <LastOrdersScroll horizontal={true}>  
                <Orders/><Orders/><Orders/>
            </LastOrdersScroll>
            <TextLastOrders style={{
                marginBottom:20,
            }}>Ações</TextLastOrders>
            <BoxActions>
                <ActionBox title="Cadastrar Produto" screenNavigator="AddProduct" icon="https://live.staticflickr.com/65535/50030574862_aa436aea43.jpg"/>
                <ActionBox title="Meus Produtos" screenNavigator="Product" icon="https://live.staticflickr.com/65535/50030314356_8434f55434.jpg"/>
                <ActionBox title="Pedidos" screenNavigator="Pedidos" icon="https://live.staticflickr.com/65535/50029776758_9d85e6e9bd.jpg"/>
            </BoxActions>
        </BoxDashoard>


        </SafeAreaView>
    )
}