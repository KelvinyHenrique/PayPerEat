import React, { useState, useReducer, useEffect } from 'react';
import { SafeAreaView, Picker } from 'react-native';
import styled from 'styled-components';
import alfaceLg from '../../assets/Products/alfacelg.png';
import shoppingCart from '../../assets/Icons/Cart/shopping-cart.png';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';


const ProductArea = styled.View`
    flexDirection:column;
    justifyContent:center;
    alignItems:center;
`;
const ProductImage = styled.Image`
  width:100%;
  height:250px;
`;
const ProductTitle = styled.View`
    width:100%;
    height:150px;
    marginBottom:10px;
    alignItems:center;
    justifyContent:center;
`;
const ProductTitleText = styled.Text`
    color:#000;
    fontSize:24px;
    marginBottom:20px;
    fontWeight:bold;
    `;

const ProductDescription = styled.Text`
    fontSize:17px;
    textAlign:center;
    marginTop:0px;
`;
const ProductItems = styled.View`
    width:100%;
    height:100px;
    flexDirection:row;
    justifyContent:space-around;
    alignItems:center;
`;
const ProductPrice = styled.Text`
    fontSize:20px;
`;
const ProductSelect = styled.View`
    borderWidth:1px;
    borderColor:#828282;
    width:37%;
    height:46px;
    marginLeft:10px;
    borderRadius:6px;
    alignItems:center;
    justifyContent:center;
`;
const ProductAddButton = styled.TouchableOpacity`
    width:70%;
    marginTop:40px;
    height:55px;
    flexDirection:row;
    borderRadius:10px;
    backgroundColor:#2BB673;
    alignItems:center;
    justifyContent:center;
`;
const TextButtonProduct = styled.Text`
    color:#FFF;
    fontSize:15px;
    fontWeight:bold;
`;
const IconProduct = styled.Image`
    width:20px;
    height:20px;
    marginRight:15px
`;


export default function ProductDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const [selectedValue, setSelectedValue] = useState("1");

    const data = async () => {
        let data;
        try {
            data = await AsyncStorage.getItem('DATA') || [];
        } catch (error) {
            console.log(error.message);
        } return data;
    }

    async function showItens() {
        const res = await data()
        console.log(res)
        return res
    }

    const product = route.params.id


    useEffect(() => {
        showItens()
    }, [])


    const goToScreen = () => {

        const saveData = async e => {
            try {
                await AsyncStorage.setItem('DATA', e.toString());
            } catch (error) {
                console.log(error.message);
            }
        };

        const returnItens = async () => {
            const res = await data()
            saveData(product + ',' + res)
        }
        returnItens();
        navigation.navigate('CheckoutStack');
    }


    return (
        <SafeAreaView >
            <ProductArea>
                <ProductImage source={{ uri: route.params.img }} />
                <ProductTitle>
                    <ProductTitleText>{route.params.name}</ProductTitleText>
                    <ProductDescription>{route.params.details}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</ProductDescription>
                </ProductTitle>

                <ProductItems>
                    <ProductPrice> {`R$ ${route.params.price} / UN`}</ProductPrice>
                    <ProductSelect>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 46, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Quantidade" value="0" />
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                        </Picker>
                    </ProductSelect>

                </ProductItems>

                <ProductAddButton onPress={goToScreen}>
                    <IconProduct source={shoppingCart} />
                    <TextButtonProduct>ADICIONAR A SACOLA</TextButtonProduct>
                </ProductAddButton>
            </ProductArea>
        </SafeAreaView>
    )
}