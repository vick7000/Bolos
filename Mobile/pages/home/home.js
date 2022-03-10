import React,{ useState} from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView} from 'react-native';

import style from './style';

export default function Home ({navigation}) {

    return (
        <ScrollView>
            <View style={style.slides}>
                <Text>teste EFEITO SLIDE</Text>
            </View>
        <View style={style.viewmbolo}>
                <View style={style.montabolo}>
                    
                    <TouchableOpacity onPress={ () => { navigation.navigate("Seubolo") }}> 
                        <Text>Monte seu Bolo</Text>
                    </TouchableOpacity>                                   
              
                           
                </View>

                <View style={style.imgbolo}>
                    
                    <TouchableOpacity> 
                        <Text>Img Bolo</Text>
                    </TouchableOpacity>
                
                </View>
        </View>  
        </ScrollView>
    );
}