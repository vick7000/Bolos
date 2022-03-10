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
import Home from './pages/home/home';
import Seubolo from './pages/montabolo/pag1';

function LogoTitle() {
  const navigation = useNavigation();
  return (
    <View 
    style={{ flex:1,flexDirection:'row', alignItems: 'center',
    justifyContent:'space-around', padding:2 }}>

      <TouchableOpacity
                onPress={ () => navigation.navigate('Cadastro')}>
                <Text>Catálogo</Text>
      </TouchableOpacity>

      <Image
        style={{ width: 70, height: 70 }}
        source={require('./assets/logohome.png')}
      />
      <TouchableOpacity
                onPress={ () => navigation.navigate('Login')}>
                <Text>Entre</Text>
      </TouchableOpacity>
      
      <Image
        style={{ width: 50, height: 50,  }}
        source={require('./assets/carcomp.png')}
      />
      
      
      
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
       name="Home" 
       component={Home} 
       
        options={{ headerTitle: (props) => <LogoTitle {...props} />,
        headerStyle: {
          backgroundColor: '#F3E1E1'
        }, 
        headerTintColor: 'black'}}/>
    
        
      <Stack.Screen name="Cadastro" component={Cadastro}
      
       options={{
        headerStyle: {
          backgroundColor: '#F3E1E1'
      }, 
        headerTintColor: '#FF69B4'}}/>

      <Stack.Screen name="Login" component={Login} 
        options={{
          headerStyle: {
            backgroundColor: '#F3E1E1'
        }, 
          headerTintColor: '#FF69B4'}}/>

      <Stack.Screen name="Cad2" component={Cad2} 
        options={{
          headerStyle: {
            backgroundColor: '#F3E1E1'
        }, 
          headerTintColor: '#FF69B4'}}/>

      <Stack.Screen name="Cartao" component={Cartao}
        options={{
          headerStyle: {
            backgroundColor: '#F3E1E1'
        }, 
          headerTintColor: '#FF69B4'}}/>

      <Stack.Screen name="Pix" component={Pix} 
        options={{
          headerStyle: {
            backgroundColor: '#F3E1E1'
        }, 
          headerTintColor: '#FF69B4'}}/>

      <Stack.Screen name="Boleto" component={Boleto} 
        options={{
          headerStyle: {
            backgroundColor: '#F3E1E1'
        }, 
          headerTintColor: '#FF69B4'}}/>

      <Stack.Screen name="Confirm" component={Confirm} 
        options={{
          headerStyle: {
            backgroundColor: '#F3E1E1'
        }, 
          headerTintColor: '#FF69B4'}}/>

      <Stack.Screen name="Seubolo" component={Seubolo} 
              options={{
                headerStyle: {
                  backgroundColor: '#F3E1E1'
              }, 
                headerTintColor: '#FF69B4'}}/>


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
