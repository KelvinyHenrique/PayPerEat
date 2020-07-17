import React from 'react';
import { Text, Image, View } from 'react-native';
import styled from 'styled-components';
import couveFlor from '../../../assets/Products/couveflor.png';

const ProductCard = styled.View`
    flexDirection:row;
    marginBottom:25px;
    width:90%;
    borderRadius:6px;
    height:100px;
    alignSelf:center;
`;

const ProductImage = styled.Image`
    borderRadius:5px;
    width:30%;
    height:100%;
`;
const ProductLeftContent = styled.View`
    width:70%;
    height:100%;
    alignItems:center;
    justifyContent:space-between;
    paddingBottom:12px;
   
    `;
const TopContentProduct = styled.View`
    width:98%;
    padding:10px;
    flexDirection:row;
    justifyContent:space-between;
`;
const ProducTitle = styled.Text`
    fontSize:17px;
    color:#555555;
`;
const BottomContent = styled.View`
    width:90%;
    flexDirection:row;
    justifyContent:space-between;
`;

const Price = styled.Text`
    fontSize:17px;
    color:#CECECE;
`;


export default function ProductCart() {

    const handleProductPoints = () => {
        alert('Botão pressionado');
    }

    return (
        <ProductCard style={{
            backgroundColor: "white",
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
        }}>
            <ProductImage source={couveFlor} />
            <ProductLeftContent>
                <TopContentProduct>
                    <ProducTitle>Couve-Flor</ProducTitle>
                </TopContentProduct>

                <BottomContent>
                    <Price>R$ 12,00</Price>
                </BottomContent>

            </ProductLeftContent>
        </ProductCard>
    );
} 