import React from 'react';
import styled from 'styled-components';

const AddressArea = styled.View`
    width:90%;
    height:100px;
    backgroundColor:#FFF;
    borderRadius:10px;
    padding:15px;
    justifyContent:space-between;
`;
const AddressAreaTop = styled.View`
    flexDirection:row;
    justifyContent:space-between;

`;
const AddressList = styled.Text`
    color:#222222;
`;
const NameUserAddress = styled.Text`
    fontSize:15px;
    color:#222222;
`;
const BtnAddressChange = styled.TouchableOpacity``;
const BtnText = styled.Text`
    color:#DB3022;
`;


export default function Address() {

    return (

        <AddressArea style={{
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
        }}>
            <AddressAreaTop>
            <NameUserAddress>Kelviny Henrique</NameUserAddress>
            <BtnAddressChange>
                <BtnText>Mudar</BtnText>
            </BtnAddressChange>
            </AddressAreaTop>
            <AddressList>Travessa Coronel Santos Mestre, N° 26, Apartamento 102</AddressList>
        </AddressArea>
    );

}