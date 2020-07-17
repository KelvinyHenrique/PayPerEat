import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSalerStack from './Saler/HomeSalerStack';
import OrdersStack from './Saler/OrdersStack';
import ProfileStack from './ProfileStack';
import ProductStack from './Saler/ProductStack';
import { Image, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



function Notifications() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Em breve!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#2BB673',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeSalerStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Doar',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Produtos"
                component={ProductStack}
                options={{
                    tabBarLabel: 'Produtos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="apps-box" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Pedidos"
                component={OrdersStack}
                options={{
                    tabBarLabel: 'Pedidos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="playlist-check" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default () => {
    return (
        <MyTabs />
    );
}
