import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

//import style from './style';

export default function MountTwo({ navigation }) {



return (
<ScrollView>
        <View>
            <Text> Escolha o recheio do seu Bolo!</Text>
        </View>
        
        <View>
                <TouchableOpacity onPress={ () => { navigation.navigate("MountThree") }}>
                        <Text>Montar bolo 2</Text>
                </TouchableOpacity>
        </View>      
   
  
</ScrollView> 
);
}


