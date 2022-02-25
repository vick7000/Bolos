import React, { useState } from 'react';

import { View, TextInput, Text, TouchableOpacity,} from 'react-native';

import style from './style';

export default function Login({ navigation }) {



return (
    <View style={style.container}>        
       <Text> Entrar na sua conta</Text>
       <Text>Não tem uma conta?</Text>
       <TouchableOpacity
                onPress={ () => navigation.navigate('Cadastro')}>
                <Text>Cadastre-se!</Text>
      </TouchableOpacity>


      <TextInput style={style.inputlogin} placeholder='Digite seu email...' ></TextInput>
      <TextInput style={style.inputlogin} placeholder='Digite sua senha...'></TextInput>
 
 
      <TouchableOpacity onPress={ () => { navigation.navigate("Cadastro") }}>
                <Text style={style.btnentrar}>Entrar</Text>
      </TouchableOpacity>
    </View>
   
);
}