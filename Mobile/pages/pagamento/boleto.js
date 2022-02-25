import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';


import style from './style';

export default function Boleto({ navigation }) {



    return (
        <View>     
            <Text>Digite os dados do cartão</Text>
            <TextInput style={style.inputlogin} placeholder='Nome titular do cartão...'></TextInput>
            <TextInput style={style.inputlogin} placeholder='Número do cartão...'></TextInput>        
            <TextInput style={style.inputlogin} placeholder='Validade do cartão...'></TextInput>
            <TextInput style={style.inputlogin} placeholder='Cód. de segurança...'></TextInput>

            <TouchableOpacity onPress={ () => { navigation.navigate("Confirm") }}>
                <Text style={style.btnentrar}>Confirmar</Text>
            </TouchableOpacity>

        </View>
);
}