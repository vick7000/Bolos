import React, { useState } from 'react';
import { View, TextInput, Text,TouchableOpacity,ScrollView} from 'react-native';
//import { useForm } from 'react-hook-form';

import style from './stylecadastro';

export default function Cadastro({ navigation }) {

    const [nomeRua, setNomeRua] = useState("");
    const [nomeBairro, setNomeBairro] = useState("");
    const [numeroCasa, setNumeroCasa] = useState("");
    const [cep, setCep] = useState("");

//const {register,handleSubmit, setValue,setFocus} = useForm();

const getCep = (e) => {
    const tcep = cep.replace(/\D/g, '');
     fetch(`https://viacep.com.br/ws/${tcep}/json/`).then(res => res.json()).then(data => {
      //console.log(data);

      setNomeRua(data.logradouro);
      setNomeBairro(data.bairro);
        
      //  setValue('address', data.logradouro);
      //  setValue('neighborhood', data.bairro);
    //    setValue('city', data.localidade);
     //   setValue('uf', data.uf);
       //   setFocus(data.setNumeroCasa);   // para pular pro numero unico que nao vai ta preenchido
    });
}

return (
    <ScrollView>
      
        <View style={style.container}> 
                    <View style={style.viewtitulo}>   
                        <Text style={style.txttitulo}>Faça seu cadastro</Text>
                    </View>     
                <Text style={style.txt}>Nome:</Text>
                <TextInput style={style.inputlogin}  placeholder='Digite seu nome...' ></TextInput>
                <Text style={style.txt}>Sobrenome:</Text>
                <TextInput style={style.inputlogin} placeholder='Digite seu sobrenome...' ></TextInput>
                <Text style={style.txt}>CPF:</Text>
                <TextInput style={style.inputlogin} placeholder='Digite seu CPF...' ></TextInput>

                <Text style={style.txt}>Endereço:</Text>

                <TextInput                 
                    style={style.inputlogin} 
                    type="text"
                    placeholder='Digite seu CEP...' 
                    onBlur={getCep}
                    onChangeText={setCep}
                >
                    {cep}
                </TextInput>

                <TextInput 
                    style={style.inputlogin} 
                    type="text"
                    placeholder='Rua...'     
                    onChangeText={setNomeRua}      
                >
                    {nomeRua}
                </TextInput>

                <TextInput 
                    style={style.inputlogin} 
                    type="text"
                    placeholder='Bairro...' 
                    onChangeText={setNomeBairro}      
                >
                    {nomeBairro}
                </TextInput>
            
                <TextInput 
                    style={style.inputlogin} 
                    type="text"
                    placeholder='Número...'      
                    onChangeText={setNumeroCasa}   
                >
                    {numeroCasa}
                </TextInput>
             
         </View>
            <View style={style.viewproximo}>   
                <TouchableOpacity onPress={ () => { navigation.navigate("Cad2") }}>
                        <Text style={style.btnproximo}>Próximo</Text>
                </TouchableOpacity>

            </View>     
        
    </ScrollView>  
);
}