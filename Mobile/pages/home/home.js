import React,{ useEffect, useRef,  useState} from "react";
import { StyleSheet,View, TextInput, Text, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native';

import style from './styles';
//import { useKeenSliderNative } from 'keen-slider/react-native'


export default function Home ({navigation}) {            
    return (
        <ScrollView>
          <View style={style.containerProps}>

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