import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {Controller, useForm} from 'react-hook-form'

import style from './style';
import md5 from 'md5';



export default function Cad2({ navigation }) {

  const [cadastrando, setCadastrando] = useState(false);

       // const [input, setInput] = useState('');
        const [hidePass, setHidePass] = useState(true);

        const {handleSubmit, control,
                formState: {errors, isValid},
              } = useForm({mode: 'onBlur'})
            
            
              const onSubmit = (data) => {
                console.log(data)
              }

              const habilitarCadastro = () => {
                setCadastrando(true);
            }

      const cadastrar = () => { 
        let usuario = {
            email: email,
            senha: md5(senha),            
        }

        fetch('http://10.87.207.4:5000/login', {
          method: 'POST',
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(usuario),
        })
        .then(resp => { return resp.json(); })
        .then(async data => {
            if(data.id === underfined) {
              ToastAndroid.show('Falha ao cadastrar', ToastAndroid.SHORT);
              setCadastrando(false);
            }else {
              await AsyncStorage.setItem('userdata', JSON.stringify(data));
              navigation.navigate('Home');
            }
        });
      }



return (
<ScrollView style={{flex:1,width:'100%',backgroundColor:'#FAF2F2', height:'100%'}}>      
      
        <View style={style.criarlogin}>
                        <Text style={{
                                fontSize:22,
                                fontWeight: 'bold',
                                color:'gray',
                                borderBottomWidth:1,
                                borderColor:'#FFB6C1'
                                }}>Crie seu login
                        </Text>
        </View>
       
        <View style={style.containerlogin}>  
                <Text style={style.txts}>Email:</Text>

        <Controller
        control={control}
        name="email"
        render={({field: {onChange, value, onBlur}}) => (
                <TextInput style={style.inputlogin} 
                        placeholder='Digite seu email...'
                        value={value}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        >                                
                        </TextInput>

                )}
        rules={{
          required: {
            value: true,
            message: 'E-mail não pode estar vazio'
          },
        }}
      />
      <View style={{
              flex: 1,
              width:'100%',
             // height:'10%',
             color:'red',
              fontSize:14,
              alignItems: 'center',
              justifyContent:'center',
             // flexDirection:'column',
            
      }}>
      <Text style={style.error}>{errors.email?.message}</Text>
      </View>
               
         <Text style={style.txts}>Senha:</Text>
         </View>
        <View style={{ 
                flexDirection: 'row',
                width:'90%',
              //  height:50,
                alignItems: 'center',
                backgroundColor:'#FAF2F2',
                margin:'5%',  
                marginTop:'-2%'             

        }}>                

<Controller
        control={control}
        name="password"
        render={({field: {onChange, value, onBlur}}) => (
                <TextInput style={{
                        width:'75%',
                        height:45,
                        padding:8,
                        fontSize:18,
                        borderColor:'#FFB6C1',
                        borderBottomWidth:1,
                     }} 
                        placeholder='Digite sua senha...'
                       // value={input}
                      //  onChangeText={ (texto) => setInput(texto) }
                        secureTextEntry={hidePass}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                >                        
                </TextInput>
                 )}
                 rules={{
                   required: {
                     value: true,
                     message: 'Senha não pode estar vazia!'
                   },
                   minLength: {
                     value: 8,
                     message: 'Senha deve ter pelo menos 8 caracteres!'
                   },
                   maxLength: {
                     value: 200,
                     message: 'Senha deve ter até 200 caracteres!'
                   }
                 }}
               />
               

      <TouchableOpacity
        disabled={!isValid}
        activeOpacity={0.7}
        //style={style.button}
        onPress={handleSubmit(onSubmit)}
      >              
      </TouchableOpacity>
                <TouchableOpacity 
              style={{ 
                   backgroundColor:'#FAF2F2',
                   // backgroundColor:'blue',
                    width:'15%',
                    height:45,
                    justifyContent:'center',
                    alignItems:'center',
                    borderBottomWidth:1, 
                    borderColor:'#FFB6C1',                    
                    
                    }} 
                    onPress={ () => setHidePass(!hidePass) }>
                    { hidePass ?
                <Ionicons name="eye" color="#FF69B4" size={25} />
                :
                <Ionicons name="eye-off" color="#FF69B4" size={25}/>
              }
            </TouchableOpacity>           

        </View>

        <View style={{
                        flex: 1,
                        width:'100%',
                       // height:'10%',
                       color:'red',
                        fontSize:14,
                        alignItems: 'center',
                        justifyContent:'center',
                       // flexDirection:'column',
                        
                                      }}>
               <Text style={style.error}>
                       {errors.password?.message}
                       </Text>
                       </View>
       
        <View style={style.viewproximo}>
                <TouchableOpacity 
                        //onPress={ () => { navigation.navigate("Home") 
                        disabled={!isValid}
                         activeOpacity={0.7}
                        //style={style.button}
                        onPress={()=> { if(!cadastrando) autenticar();else cadastrar();
                          handleSubmit(onSubmit)                        
                        }}>
                        <Text style={style.btnproximo}>Confirmar</Text>
                </TouchableOpacity>
         </View>   
  
  
</ScrollView> 
);
}