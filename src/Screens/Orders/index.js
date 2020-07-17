import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import styled from 'styled-components';
import { Button } from 'react-native-paper';
import Order from '../../Components/Order';

const ButtonsOptions = styled.View`
    flexDirection:row;
    width:100%;
    height:60px;
    alignItems:center;
    justifyContent:space-around;

`;
const ButtomOptions = styled.TouchableOpacity`
    width:25%;
    height:30px;
    borderRadius:20px;
    alignItems:center;
    justifyContent:center;
`;

const ButtonText = styled.Text`
    color:#FFF;
    fontWeight:bold;
`;
const OrdersContainer = styled.ScrollView`
    width:100%;

`;

export default function Orders(props) {

    return (
        <SafeAreaView >
            <ButtonsOptions>
                <ButtomOptions style={{ backgroundColor: '#000' }}>
                    <ButtonText>Recebido</ButtonText>
                </ButtomOptions>
                <ButtomOptions style={{ backgroundColor: '#219653' }}>

                    <ButtonText>Aprovado</ButtonText>
                </ButtomOptions>
                <ButtomOptions style={{ backgroundColor: '#EB5757' }}>
                    <ButtonText>Cancelado</ButtonText>
                </ButtomOptions>
            </ButtonsOptions>
            <OrdersContainer horizontal={false} style={{
                width:'100%',
            }}>
                <Order orderNumber="1947034" orderDate="21-06-2020 14:41" ammount="2"/>
                <Order orderNumber="1947033" orderDate="21-06-2020 13:50" ammount="3"/>
                <Order orderNumber="1947032" orderDate="21-06-2020 12:21" ammount="4"/>
                <Order orderNumber="1947031" orderDate="21-06-2020 11:23" ammount="1"/>
                <Order orderNumber="1947030" orderDate="21-06-2020 10:40" ammount="2"/>
                <Order orderNumber="1947029" orderDate="21-06-2020 09:23" ammount="1"/>
            </OrdersContainer>
        </SafeAreaView>
    )
}