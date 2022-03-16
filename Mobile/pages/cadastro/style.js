import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 
    
    container:{
        backgroundColor:'#FAF2F2',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
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
    borderColor:'#FFB6C1',
    borderWidth:1,
    marginTop: 15,
    margin:5,
    padding:5,
    backgroundColor:'white',
        
   
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
viewproximo:{
    alignItems:'flex-end',
    justifyContent:'flex-end',
}
});