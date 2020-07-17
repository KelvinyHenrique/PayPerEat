import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import styled from 'styled-components';
import ProfileCard from '../../Components/ProfileCard';
import arrowNext from '../../assets/arrowNext.png';


const ProfileButtonsGroup = styled.TouchableOpacity`
    width:90%;
    marginTop:40px;
    alignSelf:center;
`;
const ButtonProfile = styled.View`
    width:100%;
    flexDirection:row;
    alignItems:center;
    justifyContent:space-between;
    `;
const LeftContent = styled.View`

`;
const TextBold = styled.Text`
    fontSize:18px;
    fontWeight:bold;
`;
const TextRegular = styled.Text`
    color:#9B9B9B;
`;
const RightContent = styled.View``;
const IconNext = styled.Image`
    width:20px;
    height:20px;
`;

export default function Profile() {

    return (
        <SafeAreaView >
            <ProfileCard />
            <ProfileButtonsGroup>
                <ButtonProfile>
                    <LeftContent>
                        <TextBold>Minhas Compras</TextBold>
                        <TextRegular>Você tem 12 compras</TextRegular>
                    </LeftContent>
                    <RightContent>
                        <IconNext source={arrowNext} />
                    </RightContent>
                </ButtonProfile>
            </ProfileButtonsGroup>
            <ProfileButtonsGroup>
                <ButtonProfile>
                    <LeftContent>
                        <TextBold>Endereços de Envio</TextBold>
                        <TextRegular>Você tem 12 compras</TextRegular>
                    </LeftContent>
                    <RightContent>
                        <IconNext source={arrowNext} />
                    </RightContent>
                </ButtonProfile>
            </ProfileButtonsGroup>
            <ProfileButtonsGroup>
                <ButtonProfile>
                    <LeftContent>
                        <TextBold>Métodos de Pagamento</TextBold>
                        <TextRegular>Visa **25</TextRegular>
                    </LeftContent>
                    <RightContent>
                        <IconNext source={arrowNext} />
                    </RightContent>
                </ButtonProfile>
            </ProfileButtonsGroup>
            <ProfileButtonsGroup>
                <ButtonProfile>
                    <LeftContent>
                        <TextBold>Códigos promocionais</TextBold>
                        <TextRegular>Você tem códigos promocionais especiais</TextRegular>
                    </LeftContent>
                    <RightContent>
                        <IconNext source={arrowNext} />
                    </RightContent>
                </ButtonProfile>
            </ProfileButtonsGroup>
            <ProfileButtonsGroup>
                <ButtonProfile>
                    <LeftContent>
                        <TextBold>Minhas opiniões</TextBold>
                        <TextRegular>Avaliar 4 itens</TextRegular>
                    </LeftContent>
                    <RightContent>
                        <IconNext source={arrowNext} />
                    </RightContent>
                </ButtonProfile>
            </ProfileButtonsGroup>
            <ProfileButtonsGroup>
                <ButtonProfile>
                    <LeftContent>
                        <TextBold>Configurações</TextBold>
                        <TextRegular>Notificações, senha</TextRegular>
                    </LeftContent>
                    <RightContent>
                        <IconNext source={arrowNext} />
                    </RightContent>
                </ButtonProfile>
            </ProfileButtonsGroup>
        </SafeAreaView>
    )
}