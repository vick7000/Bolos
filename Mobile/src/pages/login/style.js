//import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 
    
    container:{
        backgroundColor:'#FAF2F2',
        flex:1,
        alignItems:'center',
       justifyContent:'space-around',
       flexDirection: 'column',
        margin:5,
        marginTop: 5,
        width:'100%',
        height:'100%',
    },

    texttitle:{
      
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
        marginTop: 15,
        color:'#FF69B4',
        margin: 15
    },
    titletext:{
        color:'#FF69B4',
        fontSize: 25,
        margin:15,
        fontWeight: 'bold',
    },

    containercadastrese: {
        flex:1,
        alignItems:'flex-end',
        marginTop:5,
        paddingRight:10,
        backgroundColor:'#FFF'
        

    },
        
   inputlogin:{  
    width:320,     
    height:40,   
    borderColor:'#FFB6C1',
    borderBottomWidth:1,  
    marginBottom:12,    
    fontSize:16,
    backgroundColor:'#FAF2F2'    
   
},

cadastrase: {
    color:'#FF69B4',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationStyle: "solid",
    textDecorationColor: "black",
   

},

containerlabel: {
    flex:1,
    color:'#FF69B4',
    textAlign: 'right',
    margin: 'auto'

},

label: {
    color:'#FF69B4',   
    margin: 5,
    marginTop: 15,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 15,
    

},

btnentrar: {
   
    color: '#FF69B4',
    textAlign: 'center',
    width: 150,
    height: 50,
    backgroundColor:'pink',   
    margin: 15,
    padding: 12, 
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize:20,
    borderWidth:1,
    borderColor: '#FF1493'
    
      
},

});