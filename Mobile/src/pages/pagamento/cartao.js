import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView, Alert} from 'react-native';


import style from './style';

export default function Cartao({ navigation }) {



    return (
    <ScrollView>   
       
            <View style={{
                marginTop:50,
               // backgroundColor:'blue',
               
            }}> 
            <Text
            style={{
                alignSelf:'center',
                padding:5,                
                color:'gray',
                borderBottomWidth:1,
                borderColor:'black',
                fontSize:18,
            }}>
                Digite os dados do cartão</Text>
                </View>

            <View style={{
            padding: 5,
            margin:1,
            marginTop:50,
            alignItems: 'center',
            justifyContent: 'center',
            flex:1,

            }}>    
            
                
                <TextInput style={style.inputlogin} placeholder='Nome titular do cartão...'></TextInput>
               
                <TextInput style={style.inputlogin} placeholder='Número do cartão...'></TextInput>        
            </View>
            <View style={{
            padding: 5,
            margin:1,
            marginTop:1,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection:'row',
            flex:1,

            }}> 
            <Text style={{
                    //alignSelf:'flex-start',
                    //marginStart:50,
                    fontSize:14,
                    fontWeight:'bold',
                    color:'gray',
                    marginTop:1}}>Validade do cartão</Text>
                     <Text style={{
                    //alignSelf:'flex-start',
                    //marginStart:50,
                    fontSize:14,
                    fontWeight:'bold',
                    color:'gray',
                    marginTop:1}}>Cód. de segurança</Text>
                    </View>
                    <View style={{
            padding: 5,
            margin:1,
            marginTop:1,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection:'row',
            flex:1,

            }}>
                <TextInput style={style.inputcvc} placeholder='   12/50 '></TextInput>
               
                <TextInput style={style.inputcvc} placeholder='    123'></TextInput>
            </View>

            <View   style={{
                backgroundColor:'#FAF2F2',
               // width: '100%',
                 //  height: '100%',
                   alignItems:'center',
                   justifyContent:'center',
            }}>
            <TouchableOpacity 
               style={style.btnentrar}
            onPress={ () => 
            { navigation.navigate("Home") 
                Alert.alert('Seu pedido foi para cozinha e dentro de minutos poderá retirar na loja')
            }}>
                <Text style={{fontSize:20,
                    fontWeight:'bold',
                    color:'white',
                    marginTop:1}}>Confirmar</Text>
            </TouchableOpacity>

        </View>
    </ScrollView>    
);
}