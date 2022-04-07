import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView, Alert} from 'react-native';


//import style from './style';

export default function Pix({ navigation }) {



    return (
    <ScrollView
         style={{backgroundColor:'#FAF2F2'}}>
        <View style={{
            backgroundColor:'#FAF2F2',
            alignItems: 'center',
            justifyContent: 'center',
            flex:1,
            marginTop:50,  
    
    }}>     
            <Text style={{
                    fontSize:20,
                    fontWeight:'bold',
                    color:'gray',
                    borderBottomWidth:1,
                    borderColor:'black',
                    }}>Digite sua chave Pix</Text>
            </View> 

            <View style={{
                backgroundColor:'#FAF2F2',
                alignItems: 'center',
                justifyContent: 'center',
                flex:1,
                marginTop:60,  
                }}> 
            <TextInput  style={{                   
                   width:300,     
                   height:40,   
                   borderColor:'#FFB6C1',
                   borderBottomWidth:1,  
                   marginBottom:12,    
                   fontSize:16
             }}
              placeholder='Chave PIX Celular...'></TextInput>
              <TextInput  style={{                   
                   width:300,     
                   height:40,   
                   borderColor:'#FFB6C1',
                   borderBottomWidth:1,  
                   marginBottom:12,    
                   fontSize:16
             }}
              placeholder='Chave PIX email...'></TextInput>
              <TextInput  style={{                   
                   width:300,     
                   height:40,   
                   borderColor:'#FFB6C1',
                   borderBottomWidth:1,  
                   marginBottom:12,    
                   fontSize:16
             }}
              placeholder='Chave PIX CPF ...'></TextInput>
              <TextInput  style={{                   
                   width:300,     
                   height:40,   
                   borderColor:'#FFB6C1',
                   borderBottomWidth:1,  
                   marginBottom:12,    
                   fontSize:16
             }}
              placeholder='Chave PIX CNPJ...'></TextInput>
              <TextInput  style={{                   
                   width:300,     
                   height:40,   
                   borderColor:'#FFB6C1',
                   borderBottomWidth:1,  
                   marginBottom:12,    
                   fontSize:16
             }}
              placeholder='Chave PIX Aleatória...'></TextInput>
            </View> 

            <View  style={{
                backgroundColor:'#FAF2F2',
               // width: '100%',
                 //  height: '100%',
                   alignItems:'center',
                   justifyContent:'center',
            }}> 
            <TouchableOpacity  
                style={{  
                    alignItems:'center',
                    justifyContent:'center',
                    color: 'white',
                    textAlign: 'center',
                    padding:3,
                    backgroundColor:'green',    
                    margin: 8,
                    borderRadius: 8,
                    width:200,
                    height:50,
                    fontSize:18,
                    fontWeight:'bold',
                    marginTop:30,    
                
                }}
                onPress={ () => 
                { navigation.navigate("Confirm") 
                    Alert.alert('Seu pedido foi para cozinha e dentro de minutos poderá retirar na loja')
                }}>
                <Text 
                style={{                   
                    fontSize:20,
                    fontWeight:'bold',
                    color:'white',
                    marginTop:1
                    }}>Confirmar</Text>
            </TouchableOpacity>
        </View>
        
    </ScrollView>
);
}