import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

import {Picker} from '@react-native-picker/picker';
//import style from './style';

export default function MountFour({ navigation }) {

const [selectedLanguage, setSelectedLanguage] = useState();

return (
<ScrollView>
        <View>
            <Text> Escolha sua confeitaria</Text>
                <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) => 
                        setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Selecione sabor..." value="" />
                <Picker.Item label="Morangos" value="101" />
                <Picker.Item label="Calda de Chocolate" value="201" />
                <Picker.Item label="Diskets" value="301" />
                <Picker.Item label="Bombons" value="401" />            
                <Picker.Item label="Brigadeiro" value="601" />
                <Picker.Item label="Lacta" value="701" />
                </Picker>
        </View>
        
        <View>
                <TouchableOpacity onPress={ () => { navigation.navigate("Seubolo") }}>
                        <Text>Confirmar</Text>
                </TouchableOpacity>
        </View>      
   
  
</ScrollView> 
);
}


