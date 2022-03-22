import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

import {Picker} from '@react-native-picker/picker';

//import style from './style';

export default function Mountone({ navigation }) {

const [selectedLanguage, setSelectedLanguage] = useState();



return (
<ScrollView>
    <View>
        <Text> Escolha o formato do seu Bolo!</Text>
        <Picker
                selectedValue={selectedLanguage}
                style={{
                    heigth:'10%', 
                    width:'70%', 
                    margin: '10%', 
                    borderRadius: '5%', 
                     
                    backgroundColor:'red',

                }}
                onValueChange={(itemValue, itemIndex) => 
                    setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Selecione formato..."/>
            <Picker.Item label="Bolo Retangulo" value="1" />
            <Picker.Item label="Bolo Redondo" value="2" />
        </Picker>
    </View>       
      
        <View>
            <TouchableOpacity onPress={ () => { navigation.navigate("MountTwo") }}>
               <Text >Confirmar</Text>
            </TouchableOpacity>
        </View>      
   
  
</ScrollView> 
);
}