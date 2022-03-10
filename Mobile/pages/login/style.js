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
        marginTop: 5
    },

    texttitle:{
       // backgroundColor:'#FAF2F2',
       // flex:1,
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
        paddingRight:10
        

    },
        
   inputlogin:{   
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    width:350,
    height:50,
    borderColor:'#828282',
    borderWidth:1,
    marginTop: 1,
    margin:5,
    padding:5,
    backgroundColor:'white'    
   
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
    //textAlign: 'right',
    margin: 5,
    marginTop: 15,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 15,
    

},

btnentrar: {
   //flex:1,
    color: '#FF69B4',
    textAlign: 'center',
    width: 150,
    height: 50,
    backgroundColor:'pink',
   // marginTop: 15,
    margin: 15,
    padding: 12,
 //  marginBottom: 4,
    borderRadius: 15,
    fontWeight: 'bold',
    fontSize:20
      
},

  // btnentrar.hover:{
//
 //   }
});