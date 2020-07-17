import React, { useState } from 'react';
import Product from '../Product';
import { Text, Image, View } from 'react-native';
import styled from 'styled-components';
import couveFlor from '../../assets/Products/couveflor.png';
import plusImage from '../../assets/plus.png';
import subtractImage from '../../assets/minus.png';

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
const PointButtons = styled.TouchableOpacity`
    flexDirection:column;
    height:100%;
    width:10px;

`;
const Circle = styled.View`
    backgroundColor:#CECECE; 
    width:5px;
    height:5px;
    margin:1px;
    borderRadius:2px;
    
`;
const BottomContent = styled.View`
    width:90%;
    flexDirection:row;
    justifyContent:space-between;
`;
const SelecAmount = styled.View`
    flexDirection:row;
    alignItems:center;
    justifyContent:space-between;
`;
const PlusButton = styled.TouchableOpacity`
    width:25px;
    height:25px;
    alignItems:center;
    justifyContent:center;
    marginRight:7px;
    marginLeft:2px;
`;
const PlusImage = styled.Image`
    width:60%;
    height:60%;
    marginRight:7px;
    marginLeft:7px;
`;
const SubtractImage = styled.Image`
    width:60%;
    height:60%;
`;
const QuantityItem = styled.Text``;
const SubtractButton = styled.TouchableOpacity`
    marginRight:7px;
    marginLeft:7px;
    width:25px;
    height:25px;
    alignItems:center;
    justifyContent:center;
`;
const Price = styled.Text`
    fontSize:17px;
    color:#CECECE;
`;


export default function ProductCart( props ) {
     
const [amount, setAmount ] = useState(props.amount) 


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
            <ProductImage source={{ uri: props.img }} />
            <ProductLeftContent>
                <TopContentProduct>
            <ProducTitle>{props.name}</ProducTitle>
                    <PointButtons onPress={handleProductPoints}>
                        <Circle />
                        <Circle />
                        <Circle />
                    </PointButtons>
                </TopContentProduct>

                <BottomContent>
                    <SelecAmount>
                        <PlusButton style={{
                            backgroundColor: "white",
                            elevation: 8,
                            borderRadius: 20,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                        }}
                        onPress={()=> setAmount(parseInt(amount)+1)}
                        ><PlusImage source={plusImage} /></PlusButton>
                        <QuantityItem>{amount}</QuantityItem>
                        <SubtractButton style={{
                            backgroundColor: "white",
                            borderRadius: 20,
                            elevation: 8,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                        }}
                        onPress={()=> parseInt(amount) > 0 ? setAmount(parseInt(amount) - 1) : '0'}
                        ><SubtractImage source={subtractImage} /></SubtractButton>
                    </SelecAmount>

                    <Price>{ `R$ ${props.price} ` }</Price>
                </BottomContent>

            </ProductLeftContent>
        </ProductCard>
    );
} 