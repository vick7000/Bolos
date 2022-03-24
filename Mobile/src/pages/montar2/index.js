import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

import {Picker} from '@react-native-picker/picker';
//import style from './style';

export default function MountTwo({ navigation }) {

const [selectedLanguage, setSelectedLanguage] = useState();

return (
<ScrollView>
        <View>
            <Text> Escolha o recheio do seu Bolo!</Text>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => 
                    setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Selecione sabor do recheio..." value="" />
            <Picker.Item label="Limão" value="10" />
            <Picker.Item label="Chocolate" value="20" />
            <Picker.Item label="Morango" value="30" />
            <Picker.Item label="Baunilha" value="40" />
            <Picker.Item label="Abacaxi" value="50" />            
            
        </Picker>
        </View>
        
        <View>
                <TouchableOpacity onPress={ () => { navigation.navigate("MountThree") }}>
                        <Text>Confirmar</Text>
                </TouchableOpacity>
        </View>      
   
  
</ScrollView> 
);
}


