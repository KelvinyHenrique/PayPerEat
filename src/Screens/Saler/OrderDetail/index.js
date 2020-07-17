import React, { useState } from 'react';
import { SafeAreaView, Text, Picker } from 'react-native';
import styled from 'styled-components';
import OrderDetailProduct from '../../../Components/SalerComponents/OrderDetailProduct';
import { Button } from 'react-native-paper';

const OrderBox = styled.View`
    marginTop:30px;
    width:90%;
    height:94%;
    alignSelf:center;
`;

const OrderHeader = styled.View`
    alignItems:center;
    justifyContent:space-between;
    flexDirection: row;
`;
const OrderNumber = styled.Text`
    fontWeight:bold;
`;
const OrderDate = styled.Text``;
const DeliveredOrder = styled.Text`
    marginTop:15px;
    color:#000;
    textAlign:right;
    marginBottom:30px;
`;

const OrderScroll = styled.ScrollView`
    width:100%;
    paddingBottom:50px;
    `;
const OrderInformationsBox = styled.View`
    width:100%;
    alignItems:center;
    flexDirection:column;
`;
const BoxOrderInfo = styled.View`
    width:100%;
    marginTop:20px;
    justifyContent:space-between;
    flexDirection:row;
    alignItems:center;
`;
const TextBox = styled.Text`
    fontSize:16px;
    color:#9B9B9B;
`;
const TextBold = styled.Text`
    fontWeight:bold;
    fontSize:15px;
`;

const FinishOrder = styled.View`
    width:100%;
    marginTop:20px;
    marginBottom:20px;
    flexDirection:row;
    alignItems:center;
    justifyContent:space-around;
`;
const ButtonAccept = styled.TouchableOpacity`
    width:40%;
    borderRadius:25px;
    height:40px;
    backgroundColor:#219653;  
    alignItems:center;
    justifyContent:center;
`;
const ButtonReject = styled.TouchableOpacity`
    width:40%;
    borderRadius:25px;
    height:40px;
    backgroundColor:#E61F35;  
    alignItems:center;
    justifyContent:center;
`;
const TextBoxAcept = styled.Text`
    color:#FFF;
    fontSize:17px;
`;
const TextBoxReject = styled.Text`
    color:#FFF;
    fontSize:17px;
`;

export default function OrderDetail() {

    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <SafeAreaView >
            <OrderBox>
                <OrderHeader>
                    <OrderNumber>Pedido N° 1947034</OrderNumber>
                    <OrderDate>05-02-20 14:30</OrderDate>
                </OrderHeader>
                <OrderHeader>
                    <OrderNumber>3 itens</OrderNumber>
                    <DeliveredOrder>Pendente</DeliveredOrder>
                </OrderHeader>
                <OrderScroll>
                    <OrderDetailProduct />
                    <OrderDetailProduct />
                    <OrderDetailProduct />
                    <OrderDetailProduct />
                </OrderScroll>

                <OrderInformationsBox>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        marginTop: 20,
                        width: '100%',
                        textAlign: 'left'
                    }}>Informação da Compra</Text>
                    <BoxOrderInfo>
                        <TextBox>Endereço para entrega:</TextBox>
                        <TextBold>Centro de distribuição 5</TextBold>
                    </BoxOrderInfo>

                    <BoxOrderInfo>
                        <TextBox>Escolha o método de envio:</TextBox>
                        <Picker selectedValue={selectedValue} style={{ height: 50, width: 150, color: '#cecece' }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Selecionar" value="0" />
                            <Picker.Item label="Coleta normal R$ 10,00 " value="0" />
                            <Picker.Item label="Eu mesmo envio: R$ 0" value="1" />
                            <Picker.Item label="Coleta de drone: R$ 5,00" value="2" />
                        </Picker>
                    </BoxOrderInfo>

                    <BoxOrderInfo>
                        <TextBox>Total:</TextBox>
                        <TextBold>R$ 5,00</TextBold>
                    </BoxOrderInfo>
                </OrderInformationsBox>
                <FinishOrder>
                    <ButtonAccept><TextBoxAcept>Aceitar</TextBoxAcept></ButtonAccept>
                    <ButtonReject><TextBoxReject>Rejeitar</TextBoxReject></ButtonReject>
                </FinishOrder>
            </OrderBox>
        </SafeAreaView>
    )
}