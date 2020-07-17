import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import styled from 'styled-components';
import { Button } from 'react-native-paper';
import Order from '../../../Components/SalerComponents/Orders';

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
                    <ButtonText>Pendente</ButtonText>
                </ButtomOptions>
                <ButtomOptions style={{ backgroundColor: '#219653' }}>

                    <ButtonText>Aceito</ButtonText>
                </ButtomOptions>
                <ButtomOptions style={{ backgroundColor: '#EB5757' }}>
                    <ButtonText>Rejeitado</ButtonText>
                </ButtomOptions>
            </ButtonsOptions>
            <OrdersContainer horizontal={false} style={{
                width:'100%',
            }}>
                <Order StatusOrder="Enviado"/>
                <Order StatusOrder="Pendente"/>
                <Order StatusOrder="Enviado"/>
                <Order StatusOrder="Cancelado"/>
                <Order StatusOrder="Tempo Excedido"/>
                <Order StatusOrder="Enviado"/>
            </OrdersContainer>
        </SafeAreaView>
    )
}