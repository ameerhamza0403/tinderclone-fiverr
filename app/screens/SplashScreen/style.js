import { Dimensions } from "react-native";

export default {
    SplashContaner: {
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FF4A00FF',
      },
      BottomContainer: {
       width:20,
       height:20,
       
       backgroundColor: '#FF4A00FF',
        alignItems: 'center',
      },
      logo: {
        
        width: 150,
        height: 200,
      },
      textCon: {
        marginTop:0
      },
      text: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 150,
      },
    
    }