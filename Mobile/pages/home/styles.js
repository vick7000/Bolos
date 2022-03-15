import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 

    slides:{
        flex: 1
    },
    
    containerProps:{
        backgroundColor:'pink',
        height: 400,
        width: 400,
        margin:5,
        alignItems:'center',
        justifyContent:'center'
    },
   
    viewmbolo:{
        flex: 1,
        backgroundColor:'pink',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%', 
        height: '100%', 
        margin:1 ,
    },

    imagelogo: {
        height: 250,
        width: 350
       
    },

    montabolo:{
        flex: 1,       
        alignItems: 'center',              
        backgroundColor:'#7D5A5A', 
        height:150,
        width:150, 
        margin:5,
        borderRadius:20
     
    },

    imgbolo:{
        flex: 1,       
        alignItems: 'center',
        height:150,
        width:150, 
        borderRadius:20,
        backgroundColor:'#7D5A5A',        
        margin:5
    },

    
});