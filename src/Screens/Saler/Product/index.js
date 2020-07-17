import React from 'react';
import ProductComponent from '../../../Components/SalerComponents/Product'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components';

const ProductContainer = styled.View`
    width:100%;
    alignItems:center;
    justifyContent:center;
`;

export default function Product() {
    
    
    return (
        <SafeAreaView>
            <ProductContainer>
                <ProductComponent/>
            </ProductContainer>
            
        </SafeAreaView>
    );
}