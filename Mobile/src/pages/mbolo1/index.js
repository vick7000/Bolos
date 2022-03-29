import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

import {Picker} from '@react-native-picker/picker';

//import style from './style';

export default function Mountone({ navigation }) {

const [selectedLanguage, setSelectedLanguage] = useState();



return (
<ScrollView 
     style={{flex:1,width:'100%',height:'100%'}}>
    <View style={{ 
                 // backgroundColor:'blue',
                  flex:1, 
                  width:'80%', 
                  height:'50%',
                  alignItens:'center',
                  justifyContent:'center',
                  marginTop:'20%',
                  margin:50,
                  borderBottomWidth:1,
                  borderColor:'#FFB6C1',
                  
                  
                  }}>
        <Text style={{
                        fontSize:22, 
                        fontWeight:'bold',
                        alignSelf: 'center',
                        color:'#FF69B4',
                        
                        
                    }}> 
                    Escolha o formato do seu Bolo!</Text>
        </View>
        <Picker                
                style={{                     
                        margin: '15%',                                
                        marginTop:'15%',
                        borderBottomWidth:1,
                        borderBottomColor:'#FF69B4',
                    }}
                    selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => 
                    setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Selecione formato..."/>
            <Picker.Item label="Bolo Retangulo" value="1" />
            <Picker.Item label="Bolo Redondo" value="2" />
        </Picker>
          
      
        <View style={{ 
                      flex:1,
                      backgroundColor:'gray',
                      width:'100%',
                      height:'100%',                                                                                      
                      alignItems: 'flex-end',
                      justifyContent:'flex-end', 
                      marginTop:'15%'                 
                     }}>
            <TouchableOpacity style={{
                                        backgroundColor:'white',
                                        width:'30%',
                                        height:'100%',   
                                        padding:5, 
                                        marginRight:10,
                                        borderRadius:10
                                     }}
                        onPress={ () => { navigation.navigate("MountTwo") }}>
               <Text style={{ 
                                fontSize:22,
                                fontWeight: 'bold',
                            }}
                >Confirmar
                </Text>
            </TouchableOpacity>
        </View>      
   
    
</ScrollView> 
);
}