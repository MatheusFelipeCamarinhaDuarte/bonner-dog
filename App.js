import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';
import {ProdutoProvider} from './src/context/ProdutoContext'

export default function App() {
  return (
    <ProdutoProvider>
      <Routes/>

    </ProdutoProvider>
  
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
