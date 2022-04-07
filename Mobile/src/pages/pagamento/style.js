import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 
    
    container:{
        backgroundColor:'#FAF2F2',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
        
   inputlogin:{   
    width:300,     
    height:40,   
    borderColor:'#FFB6C1',
    borderBottomWidth:1,  
    marginBottom:12,    
    fontSize:16   
   
},
inputcvc:{   
    width:60,     
    height:40,   
    borderColor:'#FFB6C1',
    borderBottomWidth:1,  
    marginBottom:12,    
    fontSize:16 ,
    alignItems:'center',
   // marginStart:50,
},

btnentrar: {  
    alignItems:'center',
    justifyContent:'center',
    color: 'white',
    textAlign: 'center',
    padding:3,
    backgroundColor:'green',    
    margin: 8,
    borderRadius: 8,
    width:200,
    height:50,
    fontSize:18,
    fontWeight:'bold',
    marginTop:30, 
    
    
    
}
});