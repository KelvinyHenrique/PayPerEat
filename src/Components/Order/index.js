import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const OrderContainer = styled.View`
    width:90%;
    height:150px;
    marginTop:20px;
    alignSelf:center;
    flexDirection:column;
    justifyContent:space-around;
    backgroundColor:#fff;
    padding:10px;
    borderRadius:5px;
`;

const OrderInfo = styled.View`
    flexDirection:row;
    justifyContent:space-between;
`;
const OrderNumber = styled.Text`
    fontSize:16px;
    fontWeight:bold;
`;
const OrderTimesTamp = styled.Text`
    fontSize:15px;
    color:#9B9B9B;
`;
const OrderAddress = styled.Text`
    color:#9B9B9B;
`;
const OrderAmount = styled.Text``;
const OrderValue = styled.Text`
    fontSize:16px;
`;

const DetailButton = styled.TouchableOpacity`
    width:110px;
    padding:5px;
    alignItems:center;
    justifyContent:center;
    borderWidth:1px;
    borderRadius:10px;
`;
const TextDetail = styled.Text`
    fontSize:15px;
`;
const StatusOrder = styled.Text`
    fontSize:15px;
    color:#2AA952;
`;

export default function Order(props) {

    const navigation = useNavigation();

    const handleDetailOrder = () => {
        navigation.navigate('OrderDetail');
    }


    return (
        <OrderContainer style={{
            elevation: 8,
            shadowColor: 'red',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
        }}>
            <OrderInfo>
                <OrderNumber>Ordem №{props.orderNumber}</OrderNumber>
                <OrderTimesTamp>{props.orderDate}</OrderTimesTamp>
            </OrderInfo>
            <OrderInfo>
                <OrderAddress>Endereço:</OrderAddress>
                <OrderAddress>Tv. Santos Mestre, n° 26, Caratinga, MG</OrderAddress>
            </OrderInfo>

            <OrderInfo>
    <OrderAmount>Quantidade: {props.ammount}</OrderAmount>
                <OrderValue>Valor total: R$ 26,00</OrderValue>
            </OrderInfo>

            <OrderInfo>
                <DetailButton onPress={handleDetailOrder}>
                    <TextDetail>Detalhes</TextDetail>
                </DetailButton>

                <StatusOrder>Enviado</StatusOrder>
            </OrderInfo>

        </OrderContainer>
    );
}