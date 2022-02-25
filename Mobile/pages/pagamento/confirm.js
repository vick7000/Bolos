import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';


import style from './style';

export default function Confirm({ navigation }) {



    return (
        <View>     
            <Text>Pagamento Aprovado</Text>
            <TextInput style={style.inputlogin} placeholder='Chave PIX...'></TextInput>
            

            <TouchableOpacity onPress={ () => { navigation.navigate("Cad2") }}>
                <Text style={style.btnentrar}>Confirmar</Text>
            </TouchableOpacity>

        </View>
);
}