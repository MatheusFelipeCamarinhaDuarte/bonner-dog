import { Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Card } from 'react-native-paper'
import ProdutoContext from '../context/ProdutoContext'


export default () => {

    const [carrinho, setCarrinho] = useState([])

    useEffect(() => {
        async function loadCarrinho() {
            try {
                const carrinhoSalvo = await AsyncStorage.getItem('carrinho')
                if (carrinhoSalvo !== null) {
                    setCarrinho(JSON.parse(carrinhoSalvo))
                }
            } catch (error) {
                console.error('Erro ao carregar carrinho:', error)
            }
        }
        loadCarrinho()
    }, [])

    const excluirCarrinho = async () => {
        try {
            await AsyncStorage.removeItem('carrinho')
            setCarrinho([])
        } catch (error) {
            console.error('Erro ao excluir carrinho:', error)
        }
    }
    
    const finalizar = async () => {
        const phone = "+5511991512776";
        let message = 'Olá, gostaria de pedir: %0A';
        const produtos = Array.from(new Set(carrinho)).map((item) => {
            const quantidade = carrinho.filter((i) => i === item).length;
            return `${item} x${quantidade}`;
        });
        if (produtos.length == 0){
            Alert.alert("Você precisa ter algum item no carrinho para finaliza-lo!!")
        } else{

            for (let i = 0; i < produtos.length; i++) {
                message += produtos[i];
                if (i !== produtos.length - 1) {
                    message += '%0A';
                }
            }
            message += '%0A%0AVou pagar com:%0A'
            const url = `https://wa.me/${phone}?text=${message}`;
        
            
            Alert.alert(
                
                'Forma de pagamento',
                'Escolha a forma de pagamento',
                [
                    {
                        text: 'Cancelar',
                        onPress: () => Alert.alert('Compra cancelada'),
                        style: 'cancel',
                    },
                    {
                        text: 'Cartão de crédito',
                        onPress: () => {
                            Linking.openURL(url+'Cartão de crédito')
                            excluirCarrinho();
                        },
                        style: 'default',
                    },
                    {
                        // Apenas uma piadinha professor
                        text: '10 no CP de Mobile',
                        onPress: () => {
                            Linking.openURL(url+'10 no CP de Mobile 😎')
                            excluirCarrinho();
                        },
                        style: 'default',
                    },
                ],
                {
                    cancelable: true,
                },
            );
        }            
    };


    const { state } = useContext(ProdutoContext);


    return (
        <View style={state.styles.carrinho}>
            <Card style={state.styles.card}>
                <View style={state.styles.header}>
                    <ScrollView>

                        <Button onPress={excluirCarrinho} textColor={state.cores['vermelho']}>EXCLUIR CARRINHO</Button>

                        {Array.from(new Set(carrinho)).map((item, index) => {
                            const quantidade = carrinho.filter((i) => i === item).length
                            return (
                                <View key={index} style={state.styles.item}>
                                    <Text style={state.styles.title}>{`${item} (x${quantidade})`}</Text>
                                </View>
                            )
                        })}
                        <View style={{ backgroundColor: state.cores['preto'] }}>
                            <Button onPress={finalizar} textColor={state.cores['vermelho']}>Finalizar compra</Button>
                        </View>
                    </ScrollView>
                </View>
            </Card>
        </View>
    )
}

