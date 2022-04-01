import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import style from './style';

export default function Cad2({ navigation }) {

        const [input, setInput] = useState('');
        const [hidePass, setHidePass] = useState(true);
      

return (
<ScrollView style={{flex:1,width:'100%',backgroundColor:'#FAF2F2', height:'100%'}}>      
      
        <View style={style.criarlogin}>
                        <Text style={{fontSize:22,fontWeight: 'bold',color:'gray',borderBottomWidth:1,borderColor:'#FFB6C1'}}>Crie seu login</Text>
        </View>
       
        <View style={style.containerlogin}>  
                <Text style={style.txts}>Email:</Text>
                <TextInput style={style.inputlogin} placeholder='Digite seu email...'></TextInput>
               
         <Text style={style.txts}>Senha:</Text>
         </View>
        <View style={{ 
                flexDirection: 'row',
                width:'90%',
              //  height:50,
                alignItems: 'center',
                backgroundColor:'#FAF2F2',
                margin:'5%',  
                marginTop:'-2%'             

        }}>                
                <TextInput style={{
                        width:'75%',
                        height:45,
                        padding:8,
                        fontSize:18,
                        borderColor:'#FFB6C1',
                        borderBottomWidth:1,
                     }} 
                        placeholder='Digite sua senha...'
                        value={input}
                        onChangeText={ (texto) => setInput(texto) }
                        secureTextEntry={hidePass}
                >                        
                </TextInput>
                <TouchableOpacity 
              style={{ 
                    backgroundColor:'#FAF2F2',
                    width:'15%',
                    height:44,
                    justifyContent:'center',
                    alignItems:'center',
                    borderBottomWidth:1, 
                    borderColor:'#FFB6C1',
                    
                    }} 
                    onPress={ () => setHidePass(!hidePass) }>
                    { hidePass ?
                <Ionicons name="eye" color="#FF69B4" size={25} />
                :
                <Ionicons name="eye-off" color="#FF69B4" size={25}/>
              }
            </TouchableOpacity>
        </View>
       
        <View style={style.viewproximo}>
                <TouchableOpacity onPress={ () => { navigation.navigate("Home") }}>
                        <Text style={style.btnproximo}>Confirmar</Text>
                </TouchableOpacity>
         </View>   
  
</ScrollView> 
);
}

/*
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
*/
        
