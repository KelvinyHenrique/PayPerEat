import React, { useState } from 'react';
import { SafeAreaView, Picker, Dimensions } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import DefaultButton from '../../../Components/DefaultButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddProductArea = styled.View`
    width:90%;
    alignItems:center;
    alignSelf:center;
    `;

const ImageUpload = styled.View`
    width:100%;
    height:${Math.round(windowHeight / 3)}px;
    justifyContent:center;
    alignItems:center;

`;

const ImageBoxUpload = styled.TouchableOpacity`
    width:70%;
    alignItems:center;
    justifyContent:center;
    height:100px;
    borderWidth:1px;
    borderStyle: dashed;
    borderRadius: 5px;
    borderColor:#2BB673;
`;

const TextUpload = styled.Text`
    fontSize:16px;
    color:#CECECE;
`;

const ProductName = styled.TextInput`
    borderBottomWidth:1px;
    width:90%;
    height:50px;
    marginTop:20px;
`;
const ProductSemIdeiParaONome = styled.View`
    width:90%;
    flexDirection:row;
    alignItems:center;
    marginTop:10px;
    marginBottom:20px;
    justifyContent:space-between;
`;

const ProductQuantidade = styled.TextInput`
    borderBottomWidth:1px;
    width:30%;
    height:50px;

`;



export default function AddProduct() {

    return (
        <SafeAreaView >
            <AddProductArea>
                <ImageUpload>
                    <ImageBoxUpload>
                        <TextUpload>Enviar uma imagem</TextUpload>
                    </ImageBoxUpload>
                </ImageUpload>
                <ProductName placeholder="Nome do Produto" maxLength={50} />
                <ProductName placeholder="Descrição" maxLength={100} />
                <ProductName placeholder="Valor" maxLength={6} />
                <ProductSemIdeiParaONome>
                    <ProductQuantidade placeholder="Quantidade" maxLength={6} />
                    <Picker style={{ height: 50, width: 202, color:'#cecece'}}>
                        <Picker.Item label="Unidade de Medida" value="0" />
                        <Picker.Item label="Metros" value="1" />
                        <Picker.Item label="Litros" value="2" />
                        <Picker.Item label="Saca" value="3" />
                        <Picker.Item label="Kg" value="4" />
                    </Picker>
                </ProductSemIdeiParaONome>

                <DefaultButton width="90%" height="50px" name="Adicionar Produdo" />
            </AddProductArea>
        </SafeAreaView>
    )
}