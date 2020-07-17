import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
const windowWidth = Dimensions.get('window').width;

const OrderContainer = styled.View`
    width:${Math.round(windowWidth - 50)}px;
    height:140px;
    margin:20px;
    alignSelf:center;
    flexDirection:column;
    justifyContent:space-around;
    backgroundColor:#fff;
    padding:15px;
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
`;

const TimePerdido = styled.Text`
    fontSize:13px;
    color:#E61F35;

`;

const TimeLeft = styled.Text`
    fontSize:13px;
    color:#000;

`;


export default function Order(props) {

    const navigation = useNavigation();

    const [textColor, setTextColor] = useState('#000');

    useEffect(()=>{
        propsColorsStatus();
    },[propsColorsStatus])

    function propsColorsStatus() {
        switch (props.StatusOrder) {
            case 'Enviado':
                setTextColor('#2AA952');
                break;
            case 'Pendente':
                setTextColor('#FFBA49');
                break;
            case 'Cancelado':
                setTextColor('#EB5757');
                break;
            case 'Tempo Excedido':
                setTextColor('#EB5758');
                break;
            default:
                break;
        }
    }

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
                <OrderNumber>Pedido №1947034</OrderNumber>
                <OrderTimesTamp>16-06-2020 16:20</OrderTimesTamp>
            </OrderInfo>

            <OrderInfo>
                <OrderAmount>Quantidade:3</OrderAmount>
                <OrderValue>Valor total: R$ 26,00</OrderValue>
            </OrderInfo>

            <OrderInfo>
                {textColor == '#EB5758' ? <TimePerdido>Você não respondeu ao pedido</TimePerdido> :  <TimeLeft>Tempo restante 12min</TimeLeft>}
            </OrderInfo>

            <OrderInfo>
                <DetailButton onPress={handleDetailOrder}>
                    <TextDetail>Detalhes</TextDetail>
                </DetailButton>

                <StatusOrder style={{
                    color:textColor,
                }}>{props.StatusOrder}</StatusOrder>
            </OrderInfo>

        </OrderContainer>
    );
}