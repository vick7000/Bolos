import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 
    
    container:{
        backgroundColor:'#FAF2F2',
        flex:1,
        alignItems:'stretch',
        justifyContent:'center',
        margin:15,
        
    },
    viewtitulo:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        
    },

    txttitulo: {
        color:'#FF69B4',
        fontSize:25,
        fontWeight: 'bold'
        
    },
    txt: {
        color:'#FF69B4',
        fontSize:15,
        fontWeight: 'bold',
        margin:5
        
    },

    btns: {
        alignItems:'center',
    },
        
   inputlogin:{   
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    width:350,
    height:50,
    borderColor:'#828282',
    borderWidth:1,
    marginTop: 5,
    margin:5,
    padding:5,
    backgroundColor:'white'    
   
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
    fontWeight: 'bold'
    
},
btncartao: {
    
    color: '#FF69B4',
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
    fontWeight: 'bold'
},
viewproximo:{
    alignItems:'flex-end',
    justifyContent:'flex-end',
}
});