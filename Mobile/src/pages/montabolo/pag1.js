import React,{ useState} from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView} from 'react-native';

import style from './style';

export default function Seubolo ({navigation}) {

    return (
        <ScrollView>
            <View style={style.slides}>
                <Text>Seu Bolo</Text>
            </View>
        <View style={style.viewmbolo}>
                <View style={style.montabolo}>
                    
                    <TouchableOpacity> 
                        <Text>Monte seu Bolo</Text>
                    </TouchableOpacity>                                   
              
                           
                </View>

                <View style={style.imgbolo}>
                    
                    <TouchableOpacity onPress={ () => { navigation.navigate("Mountone") }}> 
                        <Text>Próximo</Text>
                    </TouchableOpacity>
                
                </View>
        </View>  
        </ScrollView>
    );
}