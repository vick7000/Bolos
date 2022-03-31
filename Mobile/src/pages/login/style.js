//import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 
    
container:
    {
       // backgroundColor:'#FAF2F2',
   //    backgroundColor:'green',
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection: 'column',
        margin:5,
        marginTop: "5%",
        width:'100%',
        height:'100%',
    },
texttitle:
    {      
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
        marginTop: '5%',
        color:'#FF69B4',
        margin: 15
    },
titletext:
    {
        marginTop: '15%',
        color:'#FF69B4',
        fontSize: 25,
        margin:15,
        fontWeight: 'bold',
    },

containercadastrese: 
    {
        flex:1,
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        marginTop:'10%',
        paddingRight:"5%",
        //backgroundColor:'#FAF2F2'        
      //  backgroundColor:'blue'
    },
        
inputlogin:
   {  
        width:350,     
        height:'20%',   
        borderColor:'#FFB6C1',
        borderBottomWidth:2,  
        marginBottom:12,    
        fontSize:16,
        backgroundColor:'#FAF2F2'   
            
    },

cadastrase: 
    {
        color:'#FF69B4',
        textDecorationLine: 'underline',
        fontSize:15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textDecorationStyle: "solid",
        textDecorationColor: "black",  
        alignSelf:'flex-end'  
    },

containerlabel:
     {
        flex:1,
        color:'#FF69B4',
        textAlign: 'right',     
       // backgroundColor:'gray'
    },

label: 
    {
        color:'#FF69B4',   
        margin: 0,
        marginTop: 5,
        padding: 5,
        fontWeight: 'bold',
        fontSize: 15,  

    },

btncss: 
    {       
      
        width: 150,
        height: 50,
        backgroundColor:'pink',   
        margin: 15,        
        borderRadius: 15,        
        borderWidth:1,
        borderColor: '#FF1493',
        marginTop:'10%'
        
      
    },

});