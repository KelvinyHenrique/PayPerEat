import React from 'react';
import { View, Image, Text } from 'react-native';
import alface from '../../assets/Products/alface.png';
import styles from './styles';
import star from '../../assets/star.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Product(props) {
    const navigation = useNavigation();
    const details = {
        img: props.img,
        name: props.name,
        price: props.preco,
        details: props.user,
        id: props.id
    }
    const handleProductClick = () => {
        navigation.navigate('ProductDetail',details);
    }


    return (
        <TouchableOpacity style={styles.boxProducts} onPress={handleProductClick}>

            <Image source={{ uri: props.img}} style={styles.imageRecomendations} />
            <View style={styles.containerProduct}>
                <View style={styles.contentIniProduct}>
                 <Text style={styles.productText}>{props.name}</Text>
                    <View style={styles.starProduct}>
                        <Image style={styles.productStars} source={star} />
                        <Image style={styles.productStars} source={star} />
                        <Image style={styles.productStars} source={star} />
                        <Image style={styles.productStars} source={star} />
                        <Image style={styles.productStars} source={star} />
                    </View>
                </View>
    <Text style={styles.productDescription}>{props.user}</Text>
    <Text style={styles.productPrice}>{` R$ ${props.preco}`}</Text>
            </View>

        </TouchableOpacity>
    );

}