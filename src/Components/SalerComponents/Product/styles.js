import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    imageRecomendations: {
        height: 102,
    },
    boxProducts: {
        width: '90%',
        borderRadius: 5,
        borderColor: '#EEEEEE',
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        backgroundColor: "white",
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    productText: {
        color: '#000'
    },
    productImage: {
        width:'30%',
        height:'100%',
        marginLeft: 4,
    },
    starProduct: {
        width:60,
        height:10,
        flexDirection: 'row'
    },
    productStars: {
        width:10,
        height:10,

    },

    contentIniProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 210,
        paddingTop: 10,
        paddingRight: 10,
    },
    productDescription: {
        marginTop: 5,
        textAlign: 'center',
        width: 230,
        paddingRight: 4,
    },
    productPrice: {
        width: 201,
        textAlign: 'right',
        paddingTop: 5,
        paddingBottom: 8,
        color: '#CECECE'
    },
    containerProduct: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});