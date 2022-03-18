import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';


import style from './style';

export default function Pix({ navigation }) {



    return (
    <ScrollView>   
        <View>     
            <Text>Digite a chave Pix</Text>
            <TextInput style={style.inputlogin} placeholder='Chave PIX...'></TextInput>
            

            <TouchableOpacity onPress={ () => { navigation.navigate("Confirm") }}>
                <Text style={style.btnentrar}>Confirmar</Text>
            </TouchableOpacity>

        </View>

    </ScrollView>
);
}