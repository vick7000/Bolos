import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity,ScrollView} from 'react-native';


import style from './style';

export default function Confirm({ navigation }) {



    return (
    <ScrollView style={{backgroundColor:'#FAF2F2'}}>
        <View>     
            <Text>Agora só escolher a sua forma de pagamento para o pedido ser processado</Text>
                        
        </View>
        <View>
            <TouchableOpacity  onPress={ () => { navigation.navigate("Pix") }}>
                <Image style={{ width: 300, height: 100, marginTop:10, margin:40 }}
                    source={require('../../../assets/pix.png')}/>
                 </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity  onPress={ () => { navigation.navigate("Cartao") }}>
                <Image style={{ width: 200, height: 200, marginTop:10, margin:60 }}
                    source={require('../../../assets/cartao.png')}/>
            </TouchableOpacity>
            
        </View>
        <View>
            <TouchableOpacity  onPress={ () => { navigation.navigate("Boleto") }}>
                <Image style={{ width: 300, height: 180, marginTop:10, margin:30 }}
                    source={require('../../../assets/boleto.png')}/>
            </TouchableOpacity>
            
        </View>
    </ScrollView>    
);
}