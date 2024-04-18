import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabRotas } from './tab.routes'
import { AntDesign } from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';


import Carrinho from '../screen/Carrinho';

const Stack = createNativeStackNavigator();

export function StackRotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Bonner Dogs'
                component={TabRotas}
                options={{
                    title: 'Bonner Dogs',
                    headerShown: false,
                    headerStyle: {backgroundColor: '#f7022e'},
                    headerTitleAlign:'center',
                    headerTitleStyle:{fontSize:28},
                    headerLeft: () =>
                        <TouchableOpacity style={{ marginHorizontal: 10, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 50, width: 50 }} source={require('../../assets/hot_dog.jpg')} />
                        </TouchableOpacity>,
                    headerRight: () =>
                        <TouchableOpacity style={{}}  
                        >
                            <AntDesign name="shoppingcart" size={35} color="black" style={{ marginHorizontal: 20 }} />
                        </TouchableOpacity>,

                }}
            />
            <Stack.Screen

                name='Carrinho'
                component={Carrinho}
                options={{
                    title: 'Carrinho',
                    headerTitleAlign: 'center',
                    headerTintColor: 'red',
                    headerStyle: {
                        backgroundColor: '#000'
                    },
                }}
            />

        </Stack.Navigator>
    )
}

