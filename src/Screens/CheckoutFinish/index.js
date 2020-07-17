import React from 'react';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native-safe-area-context';
import DefaultButton from '../../Components/DefaultButton';
import sucessImage from '../../assets/sucessimage.png';

const ContentFinishArea = styled.View`
    width:90%;
    height:95%;
    alignItems:center;
    justifyContent: space-between;
`;
const ImageSucess = styled.Image`
    width:290px;
    height:290px;
`;
const TextSucess = styled.Text`
    marginTop:40px;
    fontSize:25px;
    fontWeight:bold;
`;
const ParagraphFinish = styled.Text`
    textAlign:center;
    marginTop:10px;
    fontSize:17px;
`;
const TextBox = styled.View`
    width:100%;
    alignItems:center;
`;
export default function CheckoutFinsh() {
    return (
        <SafeAreaView style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ContentFinishArea>
                <TextBox>
                    <ImageSucess source={sucessImage} />
                    <TextSucess>Sucesso!</TextSucess>
                    <ParagraphFinish>Seu pedido será entregue em breve. Obrigado por escolher o nosso app!</ParagraphFinish>
                </TextBox>

                <DefaultButton width="90%" height="50px" name="Continuar Comprando" goToScreen="Home"></DefaultButton>
            </ContentFinishArea>
        </SafeAreaView>
    );
}