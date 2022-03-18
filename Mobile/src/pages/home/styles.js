import { StyleSheet} from 'react-native';


export default StyleSheet.create({ 
   
    containerProps:{
        flex:1,
        backgroundColor:'pink',
        height: '100%',
        width: '100%',
        margin:0,
        alignItems:'center',
        justifyContent:'center'
    },
   
    carouselItemContainer:{
        flex:1,
        backgroundColor:'pink',
        height: 400,
      //  width: 300,
        margin:5,
        marginTop:20,
        padding:10,
        borderRadius:50
    },
   
    titleCarousel: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white'

    },
    imageCarousel: {
        width:'100%',
        height: 200,
        borderRadius:10,
        marginTop:25

    },

    viewmbolo:{
        flex: 1,
        backgroundColor:'pink',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%', 
        height: '100%', 
        margin:0 ,
        
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