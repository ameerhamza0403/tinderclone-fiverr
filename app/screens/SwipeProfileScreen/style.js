import { Dimensions } from "react-native";
import { size } from '../../helpers/devices';
import * as Statics from '../../helpers/statics';

export default {
    Container: {
      width:Statics.DEVICE_WIDTH,
      height:Statics.DEVICE_HEIGHT,
    
        flex: 1,
  
      },
      BottomContainer: {
       width:size(20),
       height:size(20),
       
       backgroundColor: '#FF4A00FF',
        alignItems: 'center',
      },
     
    
  
  icon_style: {
    width: size(35),
    height: size(35),
    resizeMode: 'contain',
  
    alignItems: 'center',
    padding: size(15),
    borderRadius: size(30),
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:size(30),
    height:50,width:size(50),
    backgroundColor:'white',
    margin:size(10)
  },

  ModalInsideView:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: size(22)
  
  },
  
  text: {
    marginTop: size(10),
    color: '#363636',
 
    fontSize: size(16),
  }
    }