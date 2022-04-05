import React, { useState } from 'react';

import { View, TextInput, Text, TouchableOpacity,ScrollView, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5';

import style from './style';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);

//    useEffect(async () => {
//      if(await AsyncStorage.getItem('userdata') !== null) {
//          navigation.navigate('Home');
//      }
//  }, [])

  const autenticar = () => {
    let usuario = {
        email: email,
        senha: md5(senha),
    }
    console.log(autenticar)

  fetch('http://10.87.207.4:5000/login', {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(usuario),
  })
  .then(resp => { return resp.json() })
        .then(async data => {
            if(data.length > 0) {
                await AsyncStorage.setItem('userdata', JSON.stringify(data[0]));
                navigation.navigate('Home');
            }else {
                ToastAndroid.show('Email ou Senha Invalidos', ToastAndroid.SHORT);
            }
        })
    }

return (
  <ScrollView 
  style={{flex:1,width:'100%',backgroundColor:'#FAF2F2', height:'100%'}}>
    <KeyboardAvoidingView
      behavior='padding'
      
        style={style.container}>  
        <View style={style.texttitle}>     
          <Text style={style.titletext}> Entrar na sua conta</Text>
        
        </View>
      <View style={style.containerlabel}>
          <Text style={style.label}>Email:</Text> 
          <TextInput
                    //value={email} onChange={setEmail} 
                    style={style.inputlogin} 
                    placeholder='Digite seu email...'
                    value={email}
                    onChangeText={setEmail}
                    >
                    </TextInput>
        
          <Text style={style.label}>Senha:</Text>
         <View style={{ 
                flexDirection: 'row',
                width:'90%',
              //  backgroundColor:'red',
                borderRadius:5, 
                height:50,
                alignItems: 'center',

                }}>
            <TextInput 
                      //value={senha} onChange={setSenha} 
                      style={{                        
                        width:'80%',
                        height:45,
                        padding:8,
                        fontSize:18,
                        borderColor:'#FFB6C1',
                        borderBottomWidth:2,  
                      }} 
                      placeholder='Digite sua senha...'
                      value={senha}
                      onChangeText={setSenha}
                      secureTextEntry={hidePass}
                      >                    
            </TextInput>
            <TouchableOpacity 
              style={{ 
                    width:'15%',
                    height:45,
                    justifyContent:'center',
                    alignItems:'center',
                    borderBottomWidth:2, 
                    borderColor:'#FFB6C1',
                    
                    }} 
                    onPress={ () => setHidePass(!hidePass) }>
                    { hidePass ?
                <Ionicons name="eye" color="#FF69B4" size={25} />
                :
                <Ionicons name="eye-off" color="#FF69B4" size={25}/>
              }
            </TouchableOpacity>
          </View>
      </View>    

        <View style={style.btncss}>      
          <TouchableOpacity 
          
          onPress={() => {
             autenticar()  
              }}>
                    <Text style={{
                                    color: '#FF69B4',
                                    padding: 12, 
                                    fontWeight: 'bold',
                                    fontSize:20,
                                    textAlign: 'center',
                                }}>Entrar</Text>
          </TouchableOpacity>
        </View>
    
            <View style={style.containercadastrese}>
              <Text
                  style={{ 
                    fontSize:15,
                    fontWeight: 'bold',
                    color:'gray',                                            
                }}
              >Não tem uma conta?

              </Text>
                <TouchableOpacity onPress={ () => navigation.navigate('Cadastro')}>
                          <Text  style={style.cadastrase}>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>   
    </KeyboardAvoidingView> 
  </ScrollView> 
);
}