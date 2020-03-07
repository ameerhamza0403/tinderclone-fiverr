
import * as React from 'react';

import AppIntroSlider from 'react-native-app-intro-slider';
import { StyleSheet, View, Text, Image,AsyncStorage, StatusBar,ScrollView,Dimensions,Button,TextInput,TouchableHighlight} from 'react-native';

import styles from './style'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DatePicker from 'react-native-datepicker'



function EmailComponent  ({navigation}) {
    
    
       
      
        return (
      
      <ScrollView
     >
          <View style={styles.mainContainer}>
              <View style={{margin:50 , flex:2}}>
              <Text style={styles.textStyle}>

My
</Text>
<Text style={styles.textStyle}>

email is
</Text>
              </View>
              <View style={{flex:2,width:'80%' , alignItems:'center',alignSelf:'center',marginTop:40}}>
                  <TextInput style={styles.textInput}
                  placeholder="Email Address">

                  </TextInput>
              </View>
              <View style={{alignItems:'center',marginTop:40,flex:2}}>
              <View   style={styles.roundBtn} >
          
          <TouchableHighlight style={{alignItems:'center', }} onPress={() => navigation.navigate('Name')}>
            <View >
            <Text style={{color:'white' , fontSize:16,}}>
        Continue
          </Text>
            </View>
          
                     
          
            
          </TouchableHighlight>
                        
                       </View>
              </View>
            
             
   </View>


      </ScrollView>

  );
    
}

function NameComponent ({navigation}) {
    
    return (
      
        <ScrollView
        >
             <View style={styles.mainContainer}>
                 <View style={{margin:50 , flex:2}}>
                 <Text style={styles.textStyle}>
   
   My first
   </Text>
   <Text style={styles.textStyle}>
   
   name is
   </Text>
                 </View>
                 <View style={{flex:2,width:'80%' , alignItems:'center',alignSelf:'center',marginTop:40}}>
                     <TextInput style={styles.textInput}
                     placeholder="First Name">
   
                     </TextInput>
                 </View>
                 <View style={{alignItems:'center',marginTop:40,flex:2}}>
                 <View   style={styles.roundBtn} >
             
             <TouchableHighlight style={{alignItems:'center', }} onPress={() => navigation.navigate('Birthday')}>
               <View >
               <Text style={{color:'white' , fontSize:16,}}>
           Continue
             </Text>
               </View>
             
                        
             
               
             </TouchableHighlight>
                           
                          </View>
                 </View>
                 
               
                
      </View>
   
   
         </ScrollView>

  );
    
}

function BirthdayComponent ({navigation})  {
    
   
    return (
      
        <ScrollView
        >
             <View style={styles.mainContainer}>
                 <View style={{margin:50 , flex:2}}>
                 <Text style={styles.textStyle}>
   
   My 
   </Text>
   <Text style={styles.textStyle}>
   
   birthday is
   </Text>
                 </View>
                 <View style={{flex:2,width:'80%' , alignItems:'center',alignSelf:'center',marginTop:40}}>
                 <DatePicker
        style={{width: 300}}
      
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
           
            left: 0,
            top: 0,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 3
          }
          // ... You can check the source to find the other keys.
        }}
       
      />
      </View>
                 <View style={{alignItems:'center',marginTop:40,flex:2}}>
                 <View   style={styles.roundBtn} >
             
             <TouchableHighlight style={{alignItems:'center', }} onPress={() => navigation.navigate('Gender')}>
               <View >
               <Text style={{color:'white' , fontSize:16,}}>
           Continue
             </Text>
               </View>
             
                        
             
               
             </TouchableHighlight>
                           
                          </View>
                 </View>
                 
               
                
      </View>
   
   
         </ScrollView>
  );
    }


function GenderComponent ({navigation}) {
    
    return (
      
        <ScrollView
        >
             <View style={styles.mainContainer}>
                 <View style={{margin:50 , flex:2}}>
                 <Text style={styles.textStyle}>
   
  I am a
   </Text>
   
                 </View>
                 <View style={{flex:2,width:'80%' , alignItems:'center',alignSelf:'center',marginTop:40}}>
                 <View   style={styles.roundBtnTrans} >
          
          <TouchableHighlight style={{alignItems:'center', }}>
            <View >
            <Text style={{color:'black' , fontSize:17,}}>
     Woman
          </Text>
            </View>
      
          </TouchableHighlight>
                        
                       </View>

                       <View   style={styles.roundBtnTrans} >
          
          <TouchableHighlight style={{alignItems:'center', }}>
            <View >
            <Text style={{color:'black' , fontSize:17,}}>
      Man
          </Text>
            </View>
      
          </TouchableHighlight>
                        
                       </View>
                 </View>

                 <View style={{alignItems:'center',marginTop:40,flex:2}}>
                 <View   style={styles.roundBtn} >
             
             <TouchableHighlight style={{alignItems:'center', }} onPress={() => navigation.navigate('School')}>
               <View >
               <Text style={{color:'white' , fontSize:16,}}>
           Continue
             </Text>
               </View>
             
                        
             
               
             </TouchableHighlight>
                           
                          </View>
                 </View>
                 
               
                
      </View>
   
   
         </ScrollView>
    );
}

function SchoolComponent ({navigation}){
    return (
      
        <ScrollView
        >
             <View style={styles.mainContainer}>
                 <View style={{margin:50 , flex:2}}>
                 <Text style={styles.textStyle}>
   
   My 
   </Text>
   <Text style={styles.textStyle}>
   
   school is
   </Text>
                 </View>
                 <View style={{flex:2,width:'80%' , alignItems:'center',alignSelf:'center',marginTop:40}}>
                     <TextInput style={styles.textInput}
                     placeholder="School Name">
   
                     </TextInput>
                 </View>
                 <View style={{alignItems:'center',marginTop:40,flex:2}}>
                 <View   style={styles.roundBtn} >
             
             <TouchableHighlight style={{alignItems:'center', }} onPress={() => navigation.navigate('Phone')}>
               <View >
               <Text style={{color:'white' , fontSize:16,}}>
           Continue
             </Text>
               </View>
             
                        
             
               
             </TouchableHighlight>
                           
                          </View>
                 </View>
                 
               
                
      </View>
   
   
         </ScrollView>
    );
   
    
}

function PhoneComponent ({navigation}){
    return (
      
        <ScrollView
        >
             <View style={styles.mainContainer}>
                 <View style={{margin:50 , flex:2}}>
                 <Text style={styles.textStyle}>
   
   My number is
   </Text>
   
                 </View>
                 <View style={{flex:2,width:'80%' , alignItems:'center',alignSelf:'center',marginTop:10}}>
                     <TextInput style={styles.textInput}
                     placeholder="Mobile Number">
   
                     </TextInput>
                 </View>
                 <View style={{alignItems:'center',marginTop:40,flex:2}}>
                 <View   style={styles.roundBtn} >
             
             <TouchableHighlight style={{alignItems:'center', }} onPress={() => navigation.navigate('Birthday')}>
               <View >
               <Text style={{color:'white' , fontSize:16,}}>
           Continue
             </Text>
               </View>
             
                        
             
               
             </TouchableHighlight>
                           
                          </View>
                 </View>
                 
               
                
      </View>
   
   
         </ScrollView>
    );
   
    
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={EmailComponent} 
        
    
        />
        
        <Stack.Screen name="Birthday" component={BirthdayComponent} />
        
        
        <Stack.Screen name="Gender" component={GenderComponent} />
        
        
        <Stack.Screen name="Name" component={NameComponent} />
        <Stack.Screen name="School" component={SchoolComponent} />
        <Stack.Screen name="Phone" component={PhoneComponent} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;