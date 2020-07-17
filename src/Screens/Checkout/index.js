import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import Address from '../../Components/Address';
import styled from 'styled-components';
import DefaultButton from '../../Components/DefaultButton';
import { Button } from 'react-native-paper';

const TitleShipping = styled.Text`
    fontSize:20px;
    textAlign:left;
    width:100%;
    padding:23px;
`;

const TopShippingContent = styled.View``;
const BottomShipingContent = styled.View`
    width:100%;
    alignItems:center;
    justifyContent:center;
 `;
 const ResumeBuy = styled.View`
    width:100%;
    marginBottom:10px;
    alignItems:center;
 `;
 const OrderValue = styled.View`
    width:89%;
    flexDirection:row;
    alignItems:center;
    justifyContent:space-between;
 `;
 const OrderValueText = styled.Text`
    fontSize:17px;
    color:#9B9B9B;
 `;
const OrderValueTextBold = styled.Text`
    fontSize:17px;
    fontWeight:bold;
`;
const DeliveryValue = styled.View`
    width:90%;
    flexDirection:row;
    alignItems:center;
    justifyContent:space-between;
`;
const TotalOrder = styled.View`
    width:90%;
    flexDirection:row;
    alignItems:center;
    justifyContent:space-between;
`;


export default function Checkout(props) {
        const handleFinishClick = () => {
            props.navigation.navigate('CheckoutFinish');
        }

    return (
        <SafeAreaView style={{
            alignItems: 'center',
            height: '100%',
            justifyContent: 'space-between',
            paddingBottom: 35,
        }}>
            <TopShippingContent>
                <TitleShipping>
                    Endereço de entrega
            </TitleShipping>
                <Address />
            </TopShippingContent>

            <BottomShipingContent>
                <ResumeBuy>
                    <OrderValue>
                        <OrderValueText>Pedido:</OrderValueText>
                        <OrderValueTextBold>R$ 20,00</OrderValueTextBold>
                    </OrderValue>
                    <DeliveryValue>
                        <OrderValueText>Entrega:</OrderValueText>
                        <OrderValueTextBold>Grátis</OrderValueTextBold>
                    </DeliveryValue>
                    <TotalOrder>
                        <OrderValueText>Total:</OrderValueText>
                        <OrderValueTextBold>R$ 20,00</OrderValueTextBold>
                    </TotalOrder>
                </ResumeBuy>
               <DefaultButton width="90%" height="50px" name="ENVIAR PEDIDO" goToScreen="CheckoutFinish" />
            </BottomShipingContent>

        </SafeAreaView>
    );
}