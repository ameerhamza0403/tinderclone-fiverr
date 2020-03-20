
import * as React from 'react';
import { StyleSheet,
     View,
      Text, 
      Image,
      AsyncStorage, 
      StatusBar,
      ScrollView,
      Dimensions,
      Button,
      TextInput,
      Switch,
      TouchableHighlight} from 'react-native';
      import { Icon } from 'react-native-elements'
      import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import styles from './style'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Card} from "native-base";

export default class EditProfileInfo extends React.Component{
    state = {switchValue:false}
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
     }
    render () {

    return (
      
        <ScrollView
        >
             <View style={styles.mainContainer}>
             <StatusBar
            backgroundColor="#FF655B"
            barStyle="light-content"></StatusBar>
            <Card>
            <View style={{width:'100%',height:60,backgroundColor:'#fff',}}>
                 <Text style={styles.headerText}>
                         Edit Profile
                     </Text>

                 </View>
            </Card>
               
                 <View style={{width:'100%'}}>

                     <View style={{flexDirection:'row'}}>
                         <View>


                         <View style={styles.imageView}>

<Image
style={styles.imageStyle}
source={require('../../../assests/images/testImage.jpg')}
/>

</View>
<View style={{position:'absolute',left:100,top:170}}>
    
<Image style={styles.iconStyle}
    source={require('../../../assests/images/delImage.png')}/>
</View>
                         </View>





                         <View>


<View style={styles.imageView}>

<Image
style={styles.imageStyle}
source={require('../../../assests/images/testImage.jpg')}
/>

</View>
<View style={{position:'absolute',left:100,top:170}}>

<Image style={styles.iconStyle}
source={require('../../../assests/images/delImage.png')}/>
</View>
</View>


<View>


<View style={styles.imageView}>

<Image
style={styles.imageStyle}
source={require('../../../assests/images/testImage.jpg')}
/>

</View>
<View style={{position:'absolute',left:100,top:170}}>

<Image style={styles.iconStyle}
source={require('../../../assests/images/delImage.png')}/>
</View>
</View>
                     </View>

 
                     <View style={{flexDirection:'row'}}>

                     <View>


<View style={styles.imageView}>

<Image
style={styles.imageStyle}
source={require('../../../assests/images/testImage.jpg')}
/>

</View>
<View style={{position:'absolute',left:100,top:170}}>

<Image style={styles.iconStyle}
source={require('../../../assests/images/delImage.png')}/>
</View>
</View>


<View>


<View style={styles.imageView}>

<Image
style={styles.imageStyle}
source={require('../../../assests/images/testImage.jpg')}
/>

</View>
<View style={{position:'absolute',left:100,top:170}}>

<Image style={styles.iconStyle}
source={require('../../../assests/images/delImage.png')}/>
</View>
</View>


<View>


<View style={styles.imageView}>

<Image
style={styles.imageStyle}
source={require('../../../assests/images/testImage.jpg')}
/>

</View>
<View style={{position:'absolute',left:100,top:170}}>

<Image style={styles.iconStyle}
source={require('../../../assests/images/delImage.png')}/>
</View>
</View>


                     </View>

                     
                   

                     <View style={{flexDirection:'row'}}>

                     <View>


<View style={styles.imageView}>



</View>
<View style={{position:'absolute',left:100,top:170}}>

<Image style={styles.iconStyle}
source={require('../../../assests/images/AddImage.png')}/>
</View>
</View>


<View>


<View style={styles.imageView}>



</View>
<View style={{position:'absolute',left:100,top:170}}>

<Image style={styles.iconStyle}
source={require('../../../assests/images/AddImage.png')}/>
</View>
</View>


<View>


<View style={styles.imageView}>



</View>
<View style={{position:'absolute',left:100,top:170}}>

<Image style={styles.iconStyle}
source={require('../../../assests/images/AddImage.png')}/>
</View>
</View>


 </View>

                     
                     <View style={{alignItems:'center',marginTop:20,flex:2}}>
                 <View   style={styles.roundBtn} >
             
             <TouchableHighlight style={{alignItems:'center', }} onPress={() => navigation.navigate('EditProfile')}>
               <View >
               <Text style={{color:'white' , fontSize:16,}}>
           Add Media
             </Text>
               </View>
             
                        
             
               
             </TouchableHighlight>
                           
                          </View>
                 </View>
                 <View style={styles.viewContainer}>
                     
<View style={{marginTop:8,backgroundColor:'white',flexDirection:'row',width:'100%'}}>
                  
<Text style={[styles.heading,{color:'red',height:40,marginTop:7,fontSize:15}]}>
                     Smart Photos
                     </Text>  
                     
                     <View style={{alignItems:'flex-end',marginTop:10,flex:1}}> 
                     <Switch
                       trackColor={{true: 'red', false: 'grey'}}
          style={{marginTop:0}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
                     </View>
                     
       
                     
</View>


                
          
                 </View>
               
               
                  



                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                         Company
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>
        <TextInput style={styles.textInput}
                     placeholder="Add Company">
   
                     </TextInput>
    

                   

                     
</View>
                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                        School
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Add School">
   
                     </TextInput>

                     
</View>
                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                        Living in
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Add City">
   
                     </TextInput>

                     
</View>

                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                        Show my Instagram Photos
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                   
<Text style={[styles.heading,{color:'#C16574',height:40,marginTop:7}]}>
                        Connect Instagram
                     </Text>       
</View>
                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                       My Anthem
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Choose an anthem">
   
                     </TextInput>

                     
</View>

                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={[styles.heading,{color:'#ABABAB',fontSize:16,padding:12}]}>
                        Choose how you share your Spotify Anthem on Feed in Settings
                     </Text>

                
          
                 </View>
                 <View style={[styles.viewContainer,{marginTop:15}]}>
                     <Text style={styles.heading}>
                       My Top Spotify Artists
                     </Text>
<View style={{marginTop:8,backgroundColor:'white',alignItems:'center'}}>
<Text style={[styles.heading,{color:'#C16574',height:40,marginTop:7,fontWeight:'bold'}]}>
                       Add Spotify to Your Profile
                     </Text>   

                     
</View>

                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={[styles.heading,{color:'#ABABAB',fontSize:16,padding:10}]}>
                        Choose how you share your Top Spotify Artists on Feed in Settings
                     </Text>

                
          
                 </View>
                 <View style={[styles.viewContainer,{marginTop:0}]}>
                     <Text style={styles.heading}>
                      I am
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Add Gender">
   
                     </TextInput>

                     
</View>

                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                     Sexual Orientation
                     </Text>
<View style={{marginTop:8,backgroundColor:'white'}}>

                     <TextInput style={styles.textInput}
                     placeholder="Add Sexual Orientation">
   
                     </TextInput>

                     
</View>

                
          
                 </View>
                 <View style={styles.viewContainer}>
                     <Text style={styles.heading}>
                     Control Your Profile
                     </Text>
<View style={{marginTop:8,backgroundColor:'white',flexDirection:'row',width:'100%'}}>
                  
<Text style={[styles.heading,{color:'#626262',height:40,marginTop:7}]}>
                      Don't Show My Age
                     </Text>  
                     
                     <View style={{alignItems:'flex-end',marginTop:10,flex:1}}> 
                     <Switch
                       trackColor={{true: 'red', false: 'grey'}}
          style={{marginTop:0}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
                     </View>
                     
       
                     
</View>


                
          
                 </View>
             
                    
                    
                                    
                 <View style={[styles.viewContainer,{height:400}]}>
                     <Text style={styles.heading}>
                    What are Your Skills
                     </Text>

                     
<View style={{marginTop:8,backgroundColor:'white',width:'100%',height:200}}>
<View style={{flexDirection:'row'}}>
<Text style={[styles.heading,{color:'#626262',height:25,marginTop:7}]}>
                      Beginner
                     </Text>  
                     
                     <View style={{alignItems:'flex-end',marginTop:5,flex:1}}> 
                     <Switch
                       trackColor={{true: 'red', false: 'grey'}}
          style={{marginTop:0}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
                     </View>               
                         </View>

                         <View style={{width:350}}>

                             <Text style={styles.detailText}>

                             I am new to playing tennis or have only played a couple of times before
                             </Text>
                         </View>



                    

                  

                     

                         <View style={{marginTop:8,backgroundColor:'white',width:'100%',height:200}}>
<View style={{flexDirection:'row'}}>
<Text style={[styles.heading,{color:'#626262',height:25,marginTop:7}]}>
                      Improver
                     </Text>  
                     
                     <View style={{alignItems:'flex-end',marginTop:5,flex:1}}> 
                     <Switch
                       trackColor={{true: 'red', false: 'grey'}}
          style={{marginTop:0}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
                     </View>               
                         </View>

                         <View style={{width:350}}>

                             <Text style={styles.detailText}>

                        I know the basic techniques but still make quite a few mistakes
                             </Text>
                         </View>



                    

                  

                     
       

                         <View style={{marginTop:8,backgroundColor:'white',width:'100%',height:200}}>
<View style={{flexDirection:'row'}}>
<Text style={[styles.heading,{color:'#626262',height:25,marginTop:7}]}>
                      Intermediate
                     </Text>  
                     
                     <View style={{alignItems:'flex-end',marginTop:5,flex:1}}> 
                     <Switch
                       trackColor={{true: 'red', false: 'grey'}}
          style={{marginTop:0}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
                     </View>               
                         </View>

                         <View style={{width:350}}>

                             <Text style={styles.detailText}>

                                 I can rally comfortably but lack consistency in a match situation

                          
                             </Text>
                         </View>



                    

                  

                     
       
       

                         <View style={{marginTop:8,backgroundColor:'white',width:'100%',height:200}}>
<View style={{flexDirection:'row'}}>
<Text style={[styles.heading,{color:'#626262',height:25,marginTop:7}]}>
                      Advance
                     </Text>  
                     
                     <View style={{alignItems:'flex-end',marginTop:5,flex:1}}> 
                     <Switch
                       trackColor={{true: 'red', false: 'grey'}}
          style={{marginTop:0}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
                     </View>               
                         </View>

                         <View style={{width:350}}>

                             <Text style={styles.detailText}>

                               I am a good club player and can play with spin,placement and power
                             </Text>
                         </View>



                    

                  

                     
       
       

                         <View style={{marginTop:8,backgroundColor:'white',width:'100%',height:200}}>
<View style={{flexDirection:'row'}}>
<Text style={[styles.heading,{color:'#626262',height:25,marginTop:7}]}>
                      Expert
                     </Text>  
                     
                     <View style={{alignItems:'flex-end',marginTop:5,flex:1}}> 
                     <Switch
                       trackColor={{true: 'red', false: 'grey'}}
          style={{marginTop:0}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
                     </View>               
                         </View>

                         <View style={{width:350}}>

                             <Text style={styles.detailText}>

                             I play at a very high level and have competed reqionally or nationally
                             </Text>
                         </View>



                    

                  

                     
       
       
                     
</View>                      
</View> 



</View> 


                     
</View>


                     
</View>





                 </View>
             
                    
                    
                              
 
                 <View style={{alignItems:'center',marginTop:0,flex:2}}>
                 <View   style={styles.roundBtn} >
             
             <TouchableHighlight style={{alignItems:'center', }} onPress={() => navigation.navigate('School')}>
               <View >
               <Text style={{color:'white' , fontSize:16,}}>
          Save
             </Text>
               </View>
             
                        
             
               
             </TouchableHighlight>
                           
                          </View>
                 </View> 
                
                
      </View>
   
   
         </ScrollView>
    );
   
    
}
}