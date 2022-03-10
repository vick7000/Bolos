import React, { useState } from 'react';
import { View, TextInput, Text,TouchableOpacity,ScrollView} from 'react-native';

import style from './stylecadastro';

export default function Cadastro({ navigation }) {



return (
    <ScrollView>
        <View style={style.container}>   
            <Text>Faça seu cadastro</Text>
            <Text>Nome:</Text>
            <TextInput style={style.inputlogin} placeholder='Digite seu nome...' ></TextInput>
            <Text>Sobrenome:</Text>
            <TextInput style={style.inputlogin} placeholder='Digite seu sobrenome...' ></TextInput>
            <Text>CPF:</Text>
            <TextInput style={style.inputlogin} placeholder='Digite seu CPF...' ></TextInput>

            <Text>Endereço:</Text>
            <TextInput style={style.inputlogin} placeholder='Rua...' ></TextInput>
            <TextInput style={style.inputlogin} placeholder='Bairro...' ></TextInput>
            <TextInput style={style.inputlogin} placeholder='Digite seu CEP...' ></TextInput>
            <TextInput style={style.inputlogin} placeholder='Complemento (opcional ap,bloco etc)...' ></TextInput>
         </View>
         <View style={style.viewproximo}>   
            <TouchableOpacity onPress={ () => { navigation.navigate("Cad2") }}>
                    <Text style={style.btnproximo}>Próximo</Text>
            </TouchableOpacity>
            </View>  

        
        
    </ScrollView>  
);
}