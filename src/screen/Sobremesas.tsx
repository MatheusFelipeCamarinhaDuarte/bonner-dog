import { ListItem, Text, Image, Button as Btn } from "@rneui/base";
import React, { useContext, useEffect, useState } from 'react'
import { View, Button, FlatList } from 'react-native'
import ProdutoContext from "../context/ProdutoContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SobremesaScreen = ({ navigation }) => {

    type CarrinhoItem = string;
    const [carrinho, setCarrinho] = useState<CarrinhoItem[]>([]);

    const adicionarAoCarrinho = async (nome: string) => {
        try {
            let carrinhoAtual = await AsyncStorage.getItem('carrinho')
            if (carrinhoAtual === null) {
                setCarrinho([nome])
            } else {
                carrinhoAtual = JSON.parse(carrinhoAtual)
                setCarrinho([...carrinhoAtual, nome])
            }
        } catch (error) {
            console.error('Erro ao adicionar item ao carrinho:', error)
        }
    }

    useEffect(() => {
        async function saveCarrinho() {
            try {
                await AsyncStorage.setItem('carrinho', JSON.stringify(carrinho))
            } catch (error) {
                console.error('Erro ao salvar carrinho:', error)
            }
        }

        saveCarrinho()
    }, [carrinho])

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


    function getProdutos({ item }) {
        const adicionarCarrinho = async () => {
            try {
                await adicionarAoCarrinho(item.nome);
            } catch (error) {
                console.error('Erro ao adicionar ao carrinho:', error);
            }
        };
        return (
            <ListItem>
                <ListItem.Content style={state.styles.container_menu}>
                    <ListItem.Content style={{ margin: 20 }}>
                        <Image
                            style={state.styles.imageProduto}
                            source={{ uri: item.foto }}
                        />
                    </ListItem.Content>
                    <Text style={state.styles.txtTitulo}>{item.nome}</Text>
                    <ListItem.Content style={state.styles.container_descricao}>
                        <Text style={state.styles.txtDescricao}>{item.descricao}</Text>
                    </ListItem.Content>

                    <ListItem.Content
                        style={state.styles.btnAdicionarAoCarrinho}
                    >
                        

                        <Btn
                            title="Adicionar ao carrinho"
                            color={state.cores['vinho']}
                            onPress={adicionarCarrinho}
                        />
                    </ListItem.Content>
                </ListItem.Content>
            </ListItem>
        );
    }
    const { state } = useContext(ProdutoContext);
    // console.log(state)

    return (
        <View>
            <FlatList
                data={state.sobremesa}
                renderItem={getProdutos}
            />
        </View>
    );
}

export default SobremesaScreen;