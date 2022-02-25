import React from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';

const Stack = createNativeStackNavigator();


import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Cad2 from './pages/cadastro/cad2';
import Cartao from './pages/pagamento/cartao';
import Pix from './pages/pagamento/pix';
import Boleto from './pages/pagamento/boleto';
import Confirm from './pages/pagamento/confirm';

function LogoTitle() {
  const navigation = useNavigation();
  return (
    <View 
    style={{ flex:1,flexDirection:'row', alignItems: 'center',
    justifyContent:'space-around' }}>
      <Image
        style={{ width: 70, height: 70 }}
        source={require('./assets/logo.png')}
      />
      <TouchableOpacity
                onPress={ () => navigation.navigate('Cadastro')}>
                <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
                onPress={ () => navigation.navigate('Cadastro')}>
                <Text>Catalogo</Text>
      </TouchableOpacity>
      <TouchableOpacity
                onPress={ () => navigation.navigate('Cadastro')}>
                <Text>Monte seu Bolo</Text>
      </TouchableOpacity>
      
      
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
       name="Login" 
       component={Login} 
       
        options={{ headerTitle: (props) => <LogoTitle {...props} />,
        headerStyle: {
          backgroundColor: '#F3E1E1'
        }, 
        headerTintColor: 'black'}}/>
        
      <Stack.Screen name="Cadastro" component={Cadastro} />

      <Stack.Screen name="Cad2" component={Cad2} />

      <Stack.Screen name="Cartao" component={Cartao} />
      <Stack.Screen name="Pix" component={Pix} />
      <Stack.Screen name="Boleto" component={Boleto} />

      <Stack.Screen name="Confirm" component={Confirm} />


    </Stack.Navigator>
  </NavigationContainer>
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
