import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 
    
  
    containerform:{
        backgroundColor:'#FAF2F2',
        flex:1,
        width:'100%',
        alignItems:'stretch',
        justifyContent:'center',     
        paddingStart:'5%'       
        
    },
    viewtitulo:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',       
        margin:'2%',
        
       
    },

    txttitulo: {
        color:'#A9A9A9',
        fontSize:25,
        fontWeight: 'bold'
        
    },
    txt: {
        color:'#808080',
        fontSize:15,
        fontWeight: 'bold',
        margin:5,
        //paddingStart:'5%'
        
    },

    btns: {
        alignItems:'center',
    },
        
   inputlogin:{   
    width:350,     
    height:40,   
    borderColor:'#FFB6C1',
    borderBottomWidth:1,  
    marginBottom:12,   
    //paddingStart:'5%',
    fontSize:16 ,
   
   
},
btnproximo: {
    
    color: '#FF69B4',
    textAlign: 'center',
    width: 120,
    height: 50,
    backgroundColor:'pink',
    marginTop: 15,
    margin: 18,
    padding: 10,
    paddingTop: 10,
    borderRadius: 8,
    fontSize:20,
    fontWeight: 'bold',
    borderWidth:1,
    borderColor: '#FF1493'
    
},
viewproximo:{
    flex:1, 
    alignItems:'flex-end',
    justifyContent:'flex-end',
    backgroundColor:'#FAF2F2'
}
});