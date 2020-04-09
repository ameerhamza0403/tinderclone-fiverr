import { Dimensions } from "react-native";
import { size } from '../../helpers/devices.android';

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
      wrapper: {
    height: 100
  },
  title_container: { 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title_text: {
    fontSize: size(22),
    fontWeight: '700',
    color: '#363636',
  },
  icon_style: {
    width: size(35),
    height: size(35),
    resizeMode: 'contain',
  
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    height:50,width:50,
    backgroundColor:'white',
    margin:10
  },

  ModalInsideView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  
  },
  
  text: {
    marginTop: size(10),
    color: '#363636',
 
    fontSize: size(16),
  }
    }