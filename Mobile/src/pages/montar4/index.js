import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView, Alert} from 'react-native';

import {Picker} from '@react-native-picker/picker';
//import style from './style';

export default function MountFour({ navigation }) {

const [selectedLanguage, setSelectedLanguage] = useState();

return (
<ScrollView
        style={{flex:1,width:'100%',backgroundColor:'#FAF2F2', height:'100%'}}>
        <View style={{ 
                  backgroundColor:'#FAF2F2',
                  flex:1, 
                  width:'80%', 
                  height:'50%',
                  alignItens:'center',
                  justifyContent:'center',
                  marginTop:'15%',
                  margin:50,
                  borderBottomWidth:1,
                  borderColor:'#FFB6C1',                
                }}>
            <Text style={{
                           fontSize:22, 
                           fontWeight:'bold',
                           alignSelf: 'center',
                           color:'#FF69B4',                     
                        }}>  Escolha sua confeitaria!</Text>
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
                <Picker.Item label="Selecione sabor..." value="" />
                <Picker.Item label="Mirtilo" value="101" />
                <Picker.Item label="Brigadeiro" value="201" />
                
        </Picker>
       
        
        <View style={{ 
                      flex:1,
                      backgroundColor:'#FAF2F2',
                      width:'100%',
                      height:'100%',                                                                                      
                      alignItems: 'flex-end',
                      justifyContent:'flex-end', 
                      marginTop:'30%'                 
                     }}>
                <TouchableOpacity  style={{                                        
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
                                navigation.navigate("Seubolo",{selectedLanguage})
                                else{
                                        Alert.alert('Escolha confeitaria de seu Bolo')
                                } 
                                }}>
                <Text style={{ 
                                fontSize:20,
                                fontWeight: 'bold',
                                color:'#FF69B4'                                
                            }}> Confirmar</Text>
                </TouchableOpacity>
        </View>     
     
</ScrollView> 
);
}


