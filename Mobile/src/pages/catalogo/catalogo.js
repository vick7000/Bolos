import React,{ useState} from "react";
import { View, TextInput,Image, Text, TouchableOpacity, ScrollView} from 'react-native';

import style from './style';

export default function Catalogo ({navigation}) {

    return (
        <ScrollView style={{backgroundColor:'#FAF2F2'}}>
				<View style={style.viewtitle}>
					<Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold',color:'gray'}}>
					Confira alguns dos nossos 
					sabores de bolo no nosso catálogo abaixo:</Text>            
				</View> 

				<View style={style.telaCatalogo}>

					<View style={style.catalogo}>
						
								<TouchableOpacity>							
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/03.png'}}/>
									<Text style={style.textos}> Bolo Alpino</Text>							
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>

					<View style={style.catalogo}>
								<TouchableOpacity>
									
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Brigadeiro%20Tradicional.png'}}/>
									<Text style={style.textos}> Bolo  Brigadeiro</Text>
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>
					<View style={style.catalogo}>
					
								<TouchableOpacity>
									
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Bolo%20da%20Vov%C3%B3.png'}}/>
									<Text style={style.textos}> Bolo  Da Vovó</Text>
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>
					<View style={style.catalogo}>
								<TouchableOpacity>
									
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Del%C3%ADcia%20Leite.png'}}/>
									<Text style={style.textos}> Bolo  Delícia Leite </Text>
								</TouchableOpacity>              
					
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>
					<View style={style.catalogo}>
								<TouchableOpacity>
									
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Ganache%20de%20Lim%C3%A3o.png'}}/>
									<Text style={style.textos}> Bolo Ganache De Limão</Text>
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>
					<View style={style.catalogo}>
								<TouchableOpacity>
								
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Magia.png'}}/>
									<Text style={style.textos}> Bolo Magia</Text>
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>
					<View style={style.catalogoColum}>
								<TouchableOpacity>
									
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Trufado.png'}}/>
									<Text style={style.textos}> Bolo Trufado</Text>
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>
					<View style={style.catalogo}>
								<TouchableOpacity>
									
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Iogurte.png'}}/>
									<Text style={style.textos}> Bolo Iogurte</Text>
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>
					<View style={style.catalogo}>
								<TouchableOpacity>
									
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Del%C3%ADcia%20de%20Coco%20com%20Morangos.png'}}/>
									<Text style={style.textos}> Bolo Delícia de Coco com Morango</Text>
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>
					<View style={style.catalogo}>
								<TouchableOpacity>
									
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Chocotrufas%20com%20Morangos1.png'}}/>
									<Text style={style.textos}> Bolo Chocotrufas com Morangos</Text>
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>
					<View style={style.catalogo}>
								<TouchableOpacity>
								
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Aerado.png'}}/>
									<Text style={style.textos}> Bolo Areado</Text>
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>
					<View style={style.catalogo}>
								<TouchableOpacity>
								
									<Image style={style.ofert} source={{uri:'https://raw.githubusercontent.com/vick7000/Bolos/master/frontend/assets/Ganache%20de%20Lim%C3%A3o1.png'}}/>
									<Text style={style.textos}> Bolo Ganache de Limão</Text>
								</TouchableOpacity>              
					</View>
					<View style={style.viewcompra}>
						<TouchableOpacity style={style.btncompra}>
							<Text style={style.txtcompra}>Comprar</Text>
						</TouchableOpacity>
					</View>

					</View>
				
				<View style={{flexDirection: 'row',alignItems: 'center',justifyContent:'center'}}>
				<View style={style.rodape}>				    				   
								<Text style={{fontSize:15,fontWeight: 'bold',color:'gray',borderBottomWidth:1}}>
										Não achou o que te agrada?</Text>
										
				</View>
				<View style={style.viewbtnrodape}>
							<TouchableOpacity onPress={ () => { navigation.navigate("Mountone") }}>				   
								<Text style={{fontSize:18,fontWeight: 'bold',color:'#FF69B4'}}> 
								Monte seu bolo!
								</Text>
							</TouchableOpacity>              
				</View>
		  </View>
        </ScrollView>
    );
}