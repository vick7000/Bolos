import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';
import { Text, View,TouchableOpacity,Image } from 'react-native';

const Stack = createNativeStackNavigator();


import Cadastro from '../pages/cadastro';
import Login from '../pages/login';
import Cad2 from '../pages/cadastro/cad2';
import Cartao from '../pages/pagamento/cartao';
import Pix from '../pages/pagamento/pix';
import Boleto from '../pages/pagamento/boleto';
import Confirm from '../pages/pagamento/confirm';
import Home from '../pages/home/home';
import Seubolo from '../pages/montabolo/pag1';
import Mountone from '../pages/mbolo1/index';
import MountTwo from '../pages/montar2/index';
import MountThree from '../pages/montar3';
import MountFour from '../pages/montar4';
import Car from '../pages/car/car';
import Catalogo from '../pages/catalogo/catalogo';

function LogoTitle(props) {  
  const navigation = useNavigation();
  return (
    <View 
    style={{ flex:1,flexDirection:'row', alignItems: 'center',
    justifyContent:'space-around', padding:2,}}>

      <TouchableOpacity
                onPress={ () => navigation.navigate('Catalogo')}>
                <Text style={{color: '#4F4F4F'}}>Catálogo</Text>
      </TouchableOpacity>

      <Image
        style={{ width: 70, height: 70 }}
        source={require('../../assets/logohome.png')}
      />
      <TouchableOpacity
                onPress={ () => navigation.navigate('Login')}>
                <Text style={{color: '#4F4F4F'}}>Entre</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
                onPress={ () => navigation.navigate('Car')}>
      <Image
        style={{ width: 30, height: 30,  }}
        source={require('../../assets/carcomp.png')}
      />    
      </TouchableOpacity>  
    </View>
  );
}

export default function Routes() {
  return (
   
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

      <Stack.Screen name="Mountone" component={Mountone} 
             options=
             {{  title: 'Formato do Bolo' ,
                headerStyle: {
                  backgroundColor: '#F3E1E1'
              }, 
                headerTintColor: '#FF69B4'}}/>

      <Stack.Screen name="MountTwo" component={MountTwo} 
              options={{
                title: 'Recheio',
                headerStyle: {
                  backgroundColor: '#F3E1E1'
              }, 
                headerTintColor: '#FF69B4'}}/>
     <Stack.Screen name="MountThree" component={MountThree} 
              options={{
                title: 'Cobertura do Bolo',
                headerStyle: {
                  backgroundColor: '#F3E1E1'
              }, 
                headerTintColor: '#FF69B4'}}/>
    <Stack.Screen name="MountFour" component={MountFour} 
              options={{
                title: 'Confeitar seu Bolo',
                headerStyle: {
                  backgroundColor: '#F3E1E1'
              }, 
                headerTintColor: '#FF69B4'}}/>

    <Stack.Screen name="Car" component={Car} 
              options={{
                title: 'Carrinho',
                headerStyle: {
                  backgroundColor: '#F3E1E1'
              }, 
                headerTintColor: '#FF69B4'}}/>

    <Stack.Screen name="Catalogo" component={Catalogo} 
              options={{
                title: 'Catálogo',
                headerStyle: {
                  backgroundColor: '#F3E1E1'
              }, 
                headerTintColor: '#FF69B4'}}/>



    </Stack.Navigator>
 
  );
}
