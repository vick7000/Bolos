import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity,ScrollView, Alert} from 'react-native';


import style from './style';

export default function Confirm({ navigation }) {



    return (
    <ScrollView style={{backgroundColor:'#FAF2F2'}}>
        <View style={{backgroundColor:'#FAF2F2',marginTop:30}}>     
            <Text style={{
                fontSize:18,
                fontWeight:'bold', 
                color:'gray', 
                padding:5,
                margin:10,
            }}>Agora só escolher a sua forma de pagamento
             para o pedido ser processado.
             </Text>
                        
        </View>
        <View 
                style={{
                    flex:1,
                    backgroundColor:'#FAF2F2',
                    alignItems: 'center',
                    justifyContent:'space-around', 
                    width: '100%',
                    flexDirection: 'row',
                    padding:5,
                    marginTop:30
                }}>

        <View style={{
                flex:1,
                backgroundColor:'#FAF2F2', 
                margin:2,
                borderWidth:1,
                borderColor:'gray',
                borderRadius: 8,
                width:220,
                height:150
                }}>
            <TouchableOpacity  onPress={ () => { navigation.navigate("Pix") }}>
                <Text style={{
                    alignSelf:'center', 
                    color:'gray', 
                    fontSize:18, 
                    padding:5,
                    fontWeight:'bold',
                    
                }}>Pix</Text>               
                   
                <Image style={{ 
                    width: 170, 
                    height: 60, 
                    alignItems:'center',
                    justifyContent:'center',
                    margin:5,
                    padding:5
                }}
                    source={require('../../../assets/pix.png')}/>
                 </TouchableOpacity>
        </View>
        <View style={{
            flex:1,
            //backgroundColor:'#FAF2F2', 
            backgroundColor:'#FAF2F2',
            borderWidth:1,
            borderColor:'gray',
            borderRadius: 8,
            margin:2,
            width:220, 
            height:150}
            }>

<           TouchableOpacity  onPress={ () => { navigation.navigate("Boleto") }}>
                <Text style={{
                    alignSelf:'center', 
                    color:'gray', 
                    fontSize:18, 
                    padding:4,
                    fontWeight:'bold'
                }}>Boleto</Text>
                <Image style={{ 
                    width: 120, 
                    height: 50,
                    alignSelf: 'center',                     
                    justifyContent:'center',
                    margin:5,
                    padding:5
                }}
                    source={require('../../../assets/boleto.png')}/>
            </TouchableOpacity>


                       
        </View>
        </View>

        <View style={{
                    flex:1,
                    backgroundColor:'#FAF2F2',
                    alignItems: 'center',
                    justifyContent:'space-around', 
                    width: '100%',
                    flexDirection: 'row',
                    padding:5,
                    marginTop:20,
                    
                }}>

        <View style={{
            flex:1,            
            backgroundColor:'#FAF2F2',
            width:220, 
            height:160,
            margin:2,
            borderRadius: 8,
            borderWidth:1,
            borderColor:'gray'
            }}>

            <TouchableOpacity  onPress={ () => { navigation.navigate("Cartao") }}>
                <Text style={{
                    alignSelf:'center', 
                    color:'gray', 
                    fontSize:18, 
                    padding:4,
                    fontWeight:'bold'
                }}>Cartão de Crédito/Débito</Text>
                <Image style={{ 
                    width: 100, 
                    height: 100,
                    alignItems:'center',
                    justifyContent:'center',
                    margin:5,
                    padding:5
                }}
                    source={require('../../../assets/cartao.png')}/>
            </TouchableOpacity>
            
            </View>   
            <View style={{
            flex:1,            
            backgroundColor:'#FAF2F2',
            width:220, 
            height:160,
            margin:2,
            borderRadius: 8,
            borderWidth:1,
            borderColor:'gray'
            }}>

            <TouchableOpacity  onPress={ () => 
                                
             { navigation.navigate("Home") 
                Alert.alert('Seu pedido foi para cozinha e dentro de minutos poderá retirar na loja')
             }}>
                <Text style={{
                    alignSelf:'center', 
                    color:'gray', 
                    fontSize:17, 
                    padding:4,
                    fontWeight:'bold'
                }}>Pagamento na retirada</Text>
                <Image style={{ 
                    width: 100, 
                    height: 100,
                    alignItems:'center',
                    justifyContent:'center',
                    margin:5,
                    padding:5
                }}
                    source={require('../../../assets/pagloja.png')}/>
            </TouchableOpacity>
            </View>
        </View>
    </ScrollView>    
);
}