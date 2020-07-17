import React from 'react';
import { View, Image, Text } from 'react-native';
import alface from '../../../assets/Products/alface.png';
import styles from './styles';
import star from '../../../assets/star.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Product() {
    const navigation = useNavigation();
    const handleProductClick = () => {
        navigation.navigate('ProductDetail');
    }


    return (
        <TouchableOpacity style={styles.boxProducts} onPress={handleProductClick}>
            <Image source={alface} style={styles.imageRecomendations} />
            <View style={styles.containerProduct}>
                <View style={styles.contentIniProduct}>
                    <Text style={styles.productText}>Alface Verde</Text>
                    <View style={styles.starProduct}>
                        <Image style={styles.productStars} source={star} />
                        <Image style={styles.productStars} source={star} />
                        <Image style={styles.productStars} source={star} />
                        <Image style={styles.productStars} source={star} />
                        <Image style={styles.productStars} source={star} />
                    </View>
                </View>
                <Text style={styles.productDescription}>Alface, alface é muito bom pois o alface é gostoso, muito nutritivo</Text>
                <Text style={styles.productPrice}>R$ 2,50</Text>
            </View>

        </TouchableOpacity>
    );

}