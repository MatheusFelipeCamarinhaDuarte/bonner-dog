import { Text, View } from "react-native";


const MembroScreen= () => {

            
    const modificado = '\n\nProfessor, algumas coisas a respeito do projeto:\n\n\n'
    +' - Agora, se você finalizar o carrinho, ele te da escolha de como pagar\n\n'
    +' - Deixei um pouco mais limpo o estilo das páginas deixando elas em branco\n\n'
    +' - Usei o UseContext para os produtos (bebidas, Home/comidas, Sobremesas)\n\n'
    +' - Criei essa página de membros, agora totalizando 5 (Membros, Haburgueres, Bebidas, Sobremesas e carrinho)\n\n'
    +' - No carrinho, usei uma api para mandar mensagem formatada do pedido para o meu número pessoal\n\n'
    +' - Modifiquei para pegar as imagens de um site que disponibiliza gratuitamente imagens, para deixar mais leve minha aplicação\n\n'
    +' - Mudei os estilos para ficarem dentro do useContext\n\n'
    +' - Versionamento para usar as cores no useContext\n\n'
    +' - \n\n'


    return (
        <View style={{ backgroundColor: 'pink', alignItems: 'flex-start', padding: 20, paddingBottom: 25 }}>
            <Text>1º Aluno: Matheus Felipe Camarinha RM: 552295</Text>
            <Text>{modificado}</Text>
        </View>
    )
}
export default MembroScreen