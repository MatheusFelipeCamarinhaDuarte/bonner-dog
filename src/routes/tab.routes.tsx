import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';


import Home from '../screen/Home';
import Bebidas from '../screen/Bebidas';
import Sobremesas from '../screen/Sobremesas';
import Membros from '../screen/Membros';

const Tab = createBottomTabNavigator();


export function TabRotas({ navigation }) {

    function irParaCarrinho() {
        navigation.navigate('Carrinho')
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerTransparent: false,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'white',
                tabBarActiveBackgroundColor: '#f3450f',
                tabBarStyle: {
                    height: 60,
                    backgroundColor: '#f7022e',
                }

            }}
        >

            <Tab.Screen
                name='Hamburguer'
                component={Home}
                options={{
                    title:'Hamburguers',
                    headerTitle:'Bonner Dogs',
                    headerShown: true,
                    headerStyle: { height: 75, backgroundColor: '#f7022e'},
                    headerTitleAlign:'center',
                    headerTitleStyle:{fontSize:28},
                    headerLeft: () =>
                        <TouchableOpacity style={{ marginHorizontal: 10, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 50, width: 50 }} source={require('../../assets/hot_dog.jpg')} />
                        </TouchableOpacity>,
                    headerRight: () =>
                        <TouchableOpacity style={{}}>
                            <AntDesign name="shoppingcart" size={35} color="black" onPress={irParaCarrinho} style={{ marginHorizontal: 20 }} />
                        </TouchableOpacity>,
                    tabBarIcon: () => <FontAwesome5 name="hamburger" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='Bebidas'
                component={Bebidas}
                options={{
                    headerTitle:'Bonner Dogs',
                    title:'Bebidas',
                    // tabBarBadge:'new',
                    headerShown: true,
                    headerStyle: { height: 75, backgroundColor: '#f7022e'},
                    headerTitleAlign:'center',
                    headerTitleStyle:{fontSize:28},
                    headerLeft: () =>
                        <TouchableOpacity style={{ marginHorizontal: 10, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 50, width: 50 }} source={require('../../assets/hot_dog.jpg')} />
                        </TouchableOpacity>,
                    headerRight: () =>
                        <TouchableOpacity style={{}}>
                            <AntDesign name="shoppingcart" size={35} color="black" onPress={irParaCarrinho} style={{ marginHorizontal: 20 }} />
                        </TouchableOpacity>,
                    tabBarIcon: () => <FontAwesome6 name="glass-water" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='Sobremesas'
                component={Sobremesas}
                options={{
                    headerTitle:'Bonner Dogs',
                    title:'Sobremesas',
                    // tabBarBadge:'new',
                    headerShown: true,
                    headerStyle: { height: 75, backgroundColor: '#f7022e'},
                    headerTitleAlign:'center',
                    headerTitleStyle:{fontSize:28},
                    headerLeft: () =>
                        <TouchableOpacity style={{ marginHorizontal: 10, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 50, width: 50 }} source={require('../../assets/hot_dog.jpg')} />
                        </TouchableOpacity>,
                    headerRight: () =>
                        <TouchableOpacity style={{}}>
                            <AntDesign name="shoppingcart" size={35} color="black" onPress={irParaCarrinho} style={{ marginHorizontal: 20 }} />
                        </TouchableOpacity>,
                    tabBarIcon: () => <MaterialCommunityIcons name="cupcake" size={24} color="black" />
                }}
            />
            <Tab.Screen
                name='Membros'
                component={Membros}
                options={{
                    headerTitle:'Bonner Dogs',
                    title:'Membros',
                    tabBarBadge:'new',
                    headerShown: true,
                    headerStyle: { height: 75, backgroundColor: '#f7022e'},
                    headerTitleAlign:'center',
                    headerTitleStyle:{fontSize:28},
                    headerLeft: () =>
                        <TouchableOpacity style={{ marginHorizontal: 10, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                            <Image style={{ height: 50, width: 50 }} source={require('../../assets/hot_dog.jpg')} />
                        </TouchableOpacity>,
                    headerRight: () =>
                        <TouchableOpacity style={{}}>
                            <AntDesign name="shoppingcart" size={35} color="black" onPress={irParaCarrinho} style={{ marginHorizontal: 20 }} />
                        </TouchableOpacity>,
                    tabBarIcon: () => <MaterialCommunityIcons name="account-supervisor-outline" size={24} color="black" />
                }}
            />
        </Tab.Navigator>
    )
}

