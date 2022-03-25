import React, { useState } from 'react';

import { View, TextInput, Text, TouchableOpacity,ScrollView, KeyboardAvoidingView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import style from './style';

export default function Login({ navigation }) {
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

return (
  <ScrollView>
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
                    style={style.inputlogin} placeholder='Digite seu email...' ></TextInput>
        
          <Text style={style.label}>Senha:</Text>
         <View style={{ 
                flexDirection: 'row',
                width:'90%',
                
                borderRadius:5, 
                height:50,
                alignItems: 'center',

                }}>
            <TextInput 
                      //value={senha} onChange={setSenha} 
                      style={{                        
                        width:'85%',
                        heigth:50,
                        padding:8,
                        fontSize:18,
                        borderColor:'#FFB6C1',
                        borderBottomWidth:1,  
                      }} 
                      placeholder='Digite sua senha...'
                      value={input}
                      onChangeText={ (texto) => setInput(texto) }
                      secureTextEntry={hidePass}
                      >                    
            </TextInput>
            <TouchableOpacity 
              style={{ 
                    width:'15%',
                    height:50,
                    justifyContent:'center',
                    alignItems:'center',
                    
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
          <TouchableOpacity onPress={ () => { navigation.navigate("Cadastro") }}>
                    <Text style={style.btnentrar}>Entrar</Text>
          </TouchableOpacity>
        </View>
    
            <View style={style.containercadastrese}>
              <Text>Não tem uma conta?</Text>
                <TouchableOpacity onPress={ () => navigation.navigate('Cadastro')}>
                          <Text  style={style.cadastrase}>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>   
    </KeyboardAvoidingView> 
  </ScrollView> 
);
}