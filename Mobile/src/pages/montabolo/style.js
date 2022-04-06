import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 

    slides:{
        flex: 1,
        backgroundColor:'#FAF2F2',
        marginTop:'25%',
        margin:'2%'
    },
    
    viewmbolo:{
        flex: 1,
        backgroundColor:'#FAF2F2',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%', 
        height: '100%', 
        margin:1,
        marginTop:'20%' 
       
    },

    montabolo:{
        flex: 1,       
        alignItems: 'center',              
        backgroundColor:'green', 
        height:100,
        width:100, 
        margin:5,
        borderRadius:20
     
    },

    imgbolo:{
        flex: 1,       
        alignItems: 'center',
        height:100,
        width:100, 
        borderRadius:20,
        backgroundColor:'red',        
        margin:5
    },

    
});