import React, {
    useState
} from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
import Lottie from 'lottie-react-native';

//import chat from '../../assets/21306-delivery-agriculture-style.json';
import gif from '../../assets/deliveryScooter.gif';
import styles from './styles';
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';


export default function StarterScreen({ navigation }) {

    const [eye, setEye] = useState(true)


    function changeVisualize() {
        setEye(!eye);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={gif} style={styles.anim}>
            </Image>

            {/* <Lottie
        source={chat}
        style={styles.anim}
        autoPlay
        resizeMode="contain"
      /> */}

            <Text style={styles.welcome}>PayperEat</Text>
            <Text style={styles.subtitle}>Lorem Ipsum is simply dummy text of the printing
 and typesetting industry</Text>
            <View style={styles.buttons}>

                <TouchableOpacity
                    style={styles.login}
                    onPress={() => {
                        navigation.navigate('Intro')
                    }}
                >
                    <Text style={styles.textLogin}>Login</Text>

                    <Icon
                        style={styles.icon}
                        name='user'
                        size={24}
                        color='#2BB673'
                    />
                </TouchableOpacity>

                
                <TouchableOpacity
                    style={styles.sigin}
                    onPress={() => {
                        navigation.navigate('Intro')
                    }}
                >
                    <Text style={styles.textLogin}>Sign in</Text>

                    <Icon
                            name="arrow-up"
                            size={24}
                            color="#59E097"
                            style={{
                                marginLeft: 9
                            }}
                        />
                </TouchableOpacity>
            </View>
            <Text style={styles.community}>from Leprechaum </Text>

        </SafeAreaView>
    );
}