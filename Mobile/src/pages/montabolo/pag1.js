import React,{ useState} from "react";
import { View, TextInput, Text, TouchableOpacity, ScrollView} from 'react-native';

import style from './style';

export default function Seubolo ({navigation}) {

    return (
        <ScrollView style={{flex:1,width:'100%',backgroundColor:'#FAF2F2', height:'100%'}
    }>
            <View style={style.slides}>
                <Text style={{fontSize:18,fontWeight:'bold', color:'gray',padding:3}}>Agora só finalizar e seu bolo irá para cozinha!!!</Text>
            </View>
        <View style={style.viewmbolo}>                

                <View style={style.imgbolo}>
                    
                    <TouchableOpacity onPress={ () => { navigation.navigate("Home") }}> 
                        <Text style={{fontSize:30,fontWeight:'bold', color:'white',padding:3,marginTop:'25%'}}>Cancelar</Text>
                    </TouchableOpacity>
                
                </View>

                <View style={style.montabolo}>
                    
                    <TouchableOpacity> 
                        <Text style={{fontSize:18,fontWeight:'bold', color:'white',marginTop:'25%'}}>Finalizar e</Text>
                        <Text style={{fontSize:18,fontWeight:'bold', color:'white'}}>ir pra pagamento</Text>
                    </TouchableOpacity>                                   
              
                           
                </View>
        </View>  
        </ScrollView>
    );
}