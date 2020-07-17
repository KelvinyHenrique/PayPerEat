import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ActionBox = styled.TouchableOpacity`
    width:${Math.round((windowWidth/2)-30)}px;
    height:${Math.round((windowWidth/2)-60)}px;
    margin:10px;
    backgroundColor:#FFF;
    alignItems:center;
    justifyContent:center;
    flexDirection:column;
`;

const IconAction = styled.Image`
    width:70px;
    height:60px;
`;
const TextAction = styled.Text`
    fontSize:18px;
    marginTop:15px;
`;




export default function BoxAction(props) {

    const navigation = useNavigation();


    const myProducts = "https://live.staticflickr.com/65535/50030314356_8434f55434.jpg";
    const addProduct = "https://live.staticflickr.com/65535/50030574862_aa436aea43.jpg";
    const boxes = "https://live.staticflickr.com/65535/50029776758_9d85e6e9bd.jpg";
    const handleNavigation = () => {
        navigation.navigate(props.screenNavigator);
    }
    return (
        <ActionBox style={{
            elevation: 10,
            shadowColor: 'red',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
        }} onPress={handleNavigation}>
            <IconAction source={{uri: props.icon}}/>
            <TextAction>{props.title}</TextAction>
        </ActionBox>
    );
}