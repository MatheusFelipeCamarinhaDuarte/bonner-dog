import React, { createContext, useEffect, useState } from "react";
import DadosBebida from "../dados/DadosBebida";
import DadosComida from "../dados/DadosComida";
import DadosSobremesa from "../dados/DadosSobremesa";
import { Image, ListItem, Text, Button as Btn } from "@rneui/base";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProdutoContext = createContext({})

const cores = {
    preto: '#000000',
    vinho: '#8f1414',
    vermelho: '#f7022e',
    laranja: '#f3450f',
    amarelo: '#fcac03',
};
const styles = StyleSheet.create({
    container_menu: {
        backgroundColor: cores['amarelo'],
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    container_descricao: {
        backgroundColor: cores['laranja'],
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txtTitulo: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    carrinho: {
        width: '100%',
        height: '100%',
        backgroundColor: cores['vinho'],
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',

    },
    card: {
        backgroundColor: cores['amarelo'],
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 700,
        width: 350
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    item: {
        backgroundColor: cores['laranja'],
        padding: 20,
        marginVertical: 8,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnAdicionarAoCarrinho: {
        height: 50,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    txtDescricao: {
        flex:1,
        textAlign: 'justify',
        width:250,
        margin: 15,        
    },
    imageProduto: {
        height: 300,
        width: 300,
        borderRadius: 20
    }
})

export const ProdutoProvider = props => {
    return (
        <ProdutoContext.Provider value={{
            state: {
                bebida: DadosBebida,
                comida: DadosComida,
                sobremesa: DadosSobremesa,
                cores: cores,
                styles: styles
            }
        }}>
            {props.children}
        </ProdutoContext.Provider>
    )
}


export default ProdutoContext

