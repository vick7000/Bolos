import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 
    
    
    containerlogin:{
        flex:1,
        backgroundColor:'blue',
        width:'100%',
        height:'100%',
        paddingStart:'5%'
    },

    criarlogin:{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%',
     //   marginBottom:12,
       
    },

    viewproximo:{
        flex:2,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        backgroundColor:'gray',
        width:'100%',
        height:'100%',
    },

    txts: {
        color:'#808080',
        fontSize: 15,
        fontWeight: 'bold',
        margin:5

    },

    btns: {
        alignItems:'center',
    },
        
   inputlogin:{   
    width:300,     
    height:40,   
    borderColor:'#FFB6C1',
    borderBottomWidth:1,  
    marginBottom:12,    
    fontSize:16
   
},
btnproximo: {
    
    color: 'white',
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
btncartao: {
    
    color: 'white',
    textAlign: 'center',
    width: 150,
    height: 50,
    backgroundColor:'pink',
    marginTop: 15,
    margin: 8,
    padding: 4,
    paddingTop: 4,
    borderRadius: 8,
    fontSize:16,
    fontWeight: 'bold',
    borderWidth:1,
    borderColor: '#FF1493'
    
},

});