import React,{ useEffect, useRef,  useState} from "react";
import { StyleSheet,View, TextInput, Text, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native';
import Carousel from "react-native-snap-carousel";

import style from './styles';
//import { useKeenSliderNative } from 'keen-slider/react-native'

const carouselItens =[
    {
        title: 'Bolo1',
        image:
            'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/01.png',
    },
    {
        title: 'Bolo2',
        image:
            'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/02.png',
    },
    {
        title: 'Bolo3',
        image:
            'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/03.png',
    },

]

function renderItem({ item }) {
    return(
        <View style={style.carouselItemContainer}>
            <Text style={style.titleCarousel}>{item.title}</Text>    
            <Image style={style.imageCarousel}
                source={{ uri: `${item.image}`}} />
        </View>
    )
}

export default function Home ({navigation}) {            
    return (
        <ScrollView>
          <View style={style.containerProps}>
              <Carousel 
                layout={'tinder'}
                layoutCardOffset={'9'}
                data={carouselItens}
                sliderWidth={300}
                itemWidth={300}
                renderItem={renderItem}
              />

          </View>
  

        <View style={style.viewmbolo}>
                <View style={style.montabolo}>
                    
                    <TouchableOpacity onPress={ () => { navigation.navigate("Seubolo") }}> 
                            <Image
                                style={{ width: 130, height: 130, marginTop:10 }}
                                source={require('../../assets/montebolo.png')}
                            />
                    </TouchableOpacity>                                   
              
                           
                </View>

                <View style={style.imgbolo}>
                    
                    <TouchableOpacity>                         
                        <Image
                                style={{ width: 160, height: 150, marginTop:5 }}
                                source={require('../../assets/c1.png')}
                            />
                    </TouchableOpacity>
                
                </View>
        </View>  
        </ScrollView>
    );
}