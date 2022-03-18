import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

import style from './style';

export default function Cad2({ navigation }) {



return (
<ScrollView>
      
        <View style={style.containerlogin}>  
                <View style={style.criarlogin}>
                        <Text style={style.txts}>Crie seu login</Text>
                </View>
                <Text style={style.txts}>Email:</Text>
                <TextInput style={style.inputlogin} placeholder='Digite seu email...'></TextInput>
        
                <Text style={style.txts}>Senha:</Text>
                <TextInput style={style.inputlogin} placeholder='Digite sua senha...'></TextInput>
        </View>
        <View style={style.viewproximo}>
                <TouchableOpacity onPress={ () => { navigation.navigate("Cadastro") }}>
                        <Text style={style.btnproximo}>Próximo</Text>
                </TouchableOpacity>
         </View>
   
  
</ScrollView> 
);
}

{/*
        <Text>Escolha sua forma de Pagamento:</Text>
        </View>
         <View style={style.btns}>
        <TouchableOpacity onPress={ () => { navigation.navigate("Cartao") }}>
                <Text style={style.btncartao}>Cartão de Crédito/Débito</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => { navigation.navigate("Pix") }}>
                <Text style={style.btnproximo}>Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => { navigation.navigate("Boleto") }}>
                <Text style={style.btnproximo}>Boleto</Text>
        </TouchableOpacity>
        </View>
*/}
        
