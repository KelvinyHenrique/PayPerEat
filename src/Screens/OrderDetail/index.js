import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import styled from 'styled-components';
import alfaceLg from '../../assets/Products/alfacelg.png';
import shoppingCart from '../../assets/Icons/Cart/shopping-cart.png';
import OrderDetailProduct from '../../Components/OrderDetailProduct';

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
    color:#2AA952;
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
`;
const TextBox = styled.Text`
    fontSize:16px;
    color:#9B9B9B;
`;
const TextBold = styled.Text`
    fontWeight:bold;
    fontSize:15px;
`;

export default function ProductDetail() {
    return (
        <SafeAreaView >
            <OrderBox>
                <OrderHeader>
                    <OrderNumber>Pedido N° 1947034</OrderNumber>
                    <OrderDate>05-02-20 14:30</OrderDate>
                </OrderHeader>
                <OrderHeader>
                <OrderNumber>3 itens</OrderNumber>
                    <DeliveredOrder>Enviado</DeliveredOrder>
                </OrderHeader>
                <OrderScroll>
                    <OrderDetailProduct value="2.3"  productUri="https://static.tuasaude.com/media/article/bb/ad/couve_14746_l.jpg" productName="Repolho"/>
                    <OrderDetailProduct  value="1.3" productUri="https://www.ibahia.com/fileadmin/user_upload/ibahia/2019/outubro/25/banana.jpg?width=1200&enable=upscale" productName="Banana"/>
                    <OrderDetailProduct  value="5.45"  productUri="https://www.soflor.com.br/wp-content/uploads/2014/06/cebola-roxa-50-sementes-1951-e1496865117315.jpg" productName="Cebola Roxa"/>
                </OrderScroll>

                <OrderInformationsBox>
                    <Text style={{
                        fontSize:17,
                        fontWeight:'bold',
                        marginTop:20,
                        width: '100%',
                        textAlign:'left'
                    }}>Informação da Compra</Text>
                    <BoxOrderInfo>        
                            <TextBox>Endereço de Entrega:</TextBox>
                            <TextBold>Tv. Santos Mestre, N° 25</TextBold>
                    </BoxOrderInfo>

                    <BoxOrderInfo>        
                            <TextBox>Forma de pagamento:</TextBox>
                            <TextBold>Dinheiro</TextBold>
                    </BoxOrderInfo>

                    <BoxOrderInfo>        
                            <TextBox>Método de Entrega:</TextBox>
                            <TextBold>Envio R$ 2,00</TextBold>
                    </BoxOrderInfo>

                    <BoxOrderInfo>        
                            <TextBox>Total:</TextBox>
                            <TextBold>R$ 11,05</TextBold>
                    </BoxOrderInfo>
                </OrderInformationsBox>
            </OrderBox>
        </SafeAreaView>
    )
}