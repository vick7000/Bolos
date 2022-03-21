import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

//import style from './style';

export default function Mountone({ navigation }) {



return (
<ScrollView>
    <View>
        <Text> Escolha o formato do seu Bolo!</Text>
    </View>
        <View>
            <TouchableOpacity onPress={ () => { navigation.navigate("MountTwo") }}>
                <Text >Bolo Redondo</Text>
            </TouchableOpacity>
        </View>
      
        <View>
            <TouchableOpacity onPress={ () => { navigation.navigate("MountTwo") }}>
               <Text >Bolo Retângulo</Text>
            </TouchableOpacity>
        </View>      
   
  
</ScrollView> 
);
}