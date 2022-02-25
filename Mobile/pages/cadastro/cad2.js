import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';

import style from './style';

export default function Cad2({ navigation }) {



return (
    <View>     
        <Text>Crie seu login</Text>
        <Text>Email:</Text>
        <TextInput style={style.inputlogin} placeholder='Digite seu email...'></TextInput>
       
        <Text>Senha:</Text>
        <TextInput style={style.inputlogin} placeholder='Digite sua senha...'></TextInput>

        <Text>Escolha sua forma de Pagamento</Text>

        <TouchableOpacity onPress={ () => { navigation.navigate("Cartao") }}>
                <Text style={style.btnentrar}>Cartão de Crédito/Débito</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => { navigation.navigate("Pix") }}>
                <Text style={style.btnentrar}>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => { navigation.navigate("Boleto") }}>
                <Text style={style.btnentrar}>Boleto</Text>
        </TouchableOpacity>

       

        <TouchableOpacity onPress={ () => { navigation.navigate("Cadastro") }}>
                <Text style={style.btnentrar}>Próximo</Text>
      </TouchableOpacity>
    </View>
);
}