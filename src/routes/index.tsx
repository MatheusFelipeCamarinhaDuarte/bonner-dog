import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { StackRotas } from './stack.routes'



export function Routes() {
    return (

        <NavigationContainer>
            <StatusBar
                animated={true}
                backgroundColor="#f7022e"/>
            <StackRotas />
        </NavigationContainer>
    )
}