import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

//import style from './style';

export default function MountThree({ navigation }) {



return (
<ScrollView>
        <View>
            <Text> Escolha a cobertura do seu Bolo!</Text>
        </View>
        
        <View>
                <TouchableOpacity onPress={ () => { navigation.navigate("MountFour") }}>
                        <Text>Montar bolo 2</Text>
                </TouchableOpacity>
        </View>      
   
  
</ScrollView> 
);
}


