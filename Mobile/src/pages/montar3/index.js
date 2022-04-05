import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView, Alert} from 'react-native';

import {Picker} from '@react-native-picker/picker';
//import style from './style';

export default function MountThree({ navigation }) {

const [selectedLanguage, setSelectedLanguage] = useState();

return (
<ScrollView    
 style={{flex:1,width:'100%',backgroundColor:'#FAF2F2', height:'100%'}
}>
        <View   
                style={{ 
                        backgroundColor:'#FAF2F2',
                        flex:1, 
                        width:'85%', 
                        height:'50%',
                        alignItens:'center',
                        justifyContent:'center',
                        marginTop:'20%',
                        margin:50,                        
                        borderBottomWidth:1,
                        borderColor:'#FFB6C1',                
                      }}>
            <Text
                style={{
                        fontSize:22, 
                        fontWeight:'bold',
                        alignSelf: 'center',
                        color:'#FF69B4',                       
                        
                    }}>  Escolha a cobertura do seu Bolo!</Text>
            </View>
            <Picker
                  style={{                     
                            margin: '15%',                                
                            marginTop:'20%',
                            borderBottomWidth:1,
                            borderBottomColor:'#FF69B4',
                        }}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => 
                    setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Selecione a cobertura..." value="" />
            <Picker.Item label="Oceano" value="101" />
            <Picker.Item label="Pink Cupid" value="201" />
            <Picker.Item label="Verão" value="301" />
            <Picker.Item label="Floresta" value="401" />            
            <Picker.Item label="Ciasto" value="601" />
            
        </Picker>
       
        
        <View style={{ 
                      flex:1,
                      backgroundColor:'#FAF2F2',
                      width:'100%',
                      height:'100%',                                                                                      
                      alignItems: 'flex-end',
                      justifyContent:'flex-end', 
                      marginTop:'25%'                 
                     }}>
                <TouchableOpacity   style={{                                        
                                        width:'30%',
                                        height:'100%',   
                                        padding:10, 
                                        marginRight:10,
                                        borderRadius:10,
                                        borderWidth:1,
                                        borderColor: '#FF1493',
                                        backgroundColor:'pink',                                      
                                     }}
                 onPress={ () => { 
                         if(selectedLanguage)
                         navigation.navigate("MountFour") 
                         else{
                                 Alert.alert('Escolha cobertura de seu Bolo')
                         }
                         }}>
                        <Text style={{ 
                                fontSize:22,
                                fontWeight: 'bold',
                                color:'#FF69B4'                                
                            }}
                        >Confirmar
                        </Text>
                </TouchableOpacity>
        </View>      
   
  
</ScrollView> 
);
}


