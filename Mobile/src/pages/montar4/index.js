import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

import {Picker} from '@react-native-picker/picker';
//import style from './style';

export default function MountFour({ navigation }) {

const [selectedLanguage, setSelectedLanguage] = useState();

return (
<ScrollView>
        <View style={{
                backgroundColor:'blue',
                flex:1,
                width:'100%',
                height:'100%',
                alignItems:'center',
                justifyContent:'center',                          
             
                }}>
            <Text style={{
                   color:'white',
                   fontSize:20,
                   fontWeight: 'bold',
                 }}> Escolha sua decoração!</Text>
        </View>
        
        <View style={{
                flex:1,
                backgroundColor:'yellow',
                alignItems:'center',
                justifyContent:'center',
                width:'100%',
                height:'100%',
                        }}>
                <Picker
                        selectedValue={selectedLanguage}
                        style={{
                                backgroundColor:'gray',
                                height:'10%',
                                width:'70%',
                                borderRadius:10,
                        }}
                        onValueChange={(itemValue, itemIndex) => 
                        setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Selecione sabor..." value="" />
                <Picker.Item label="Mirtilo" value="101" />
                <Picker.Item label="Brigadeiro" value="201" />
                
                </Picker>
        </View>
        
        <View style={{
                flex: 1,
                backgroundColor:'black',
                alignItems:'flex-end',
                justifyContent:'flex-end',
                width:'100%',
                height:'100%',
                marginRight:10
                }}>
                <TouchableOpacity onPress={ () => { navigation.navigate("Seubolo") }}>
                        <Text style={{
                                 borderRadius:10,
                                 backgroundColor:'red', 
                                 padding:15,
                                 height:50,
                                 width:120,
                                 fontSize:18,
                                 fontWeight: 'bold',                               
                                 }}>Confirmar</Text>
                </TouchableOpacity>
        </View>      
   
  
</ScrollView> 
);
}


