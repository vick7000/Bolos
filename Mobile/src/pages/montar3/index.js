import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

import {Picker} from '@react-native-picker/picker';
//import style from './style';

export default function MountThree({ navigation }) {

const [selectedLanguage, setSelectedLanguage] = useState();

return (
<ScrollView>
        <View>
            <Text> Escolha a cobertura do seu Bolo!</Text>
            <Picker
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
        </View>
        
        <View>
                <TouchableOpacity onPress={ () => { navigation.navigate("MountFour") }}>
                        <Text>Confirmar</Text>
                </TouchableOpacity>
        </View>      
   
  
</ScrollView> 
);
}


