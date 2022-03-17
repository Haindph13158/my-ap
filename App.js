/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View , StyleSheet, TouchableOpacity, Text} from 'react-native'
//  import auth from '@react-native-firebase/auth';
 import {GoogleSignin} from '@react-native-google-signin/google-signin';
 GoogleSignin.configure({
   webClientId: "843106096419-ht98iqnuu97kpc8uaiipnki67r6glogt.apps.googleusercontent.com",
   offlineAccess: false,
 });
 
 const styles = StyleSheet.create({
 
 })
 const App = () => {
  
   const onGoogleButtonPress = async () => {
     // Get the users ID token
     const {idToken} = await GoogleSignin.signIn();
     console.log('token', idToken);
     // Create a Google credential with the token
    //  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
 
     // Sign-in the user with the credential
    //  const user_login = auth().signInWithCredential(googleCredential);
    //  user_login.then((user) => {
    //    if(user){
    //      // console.log(user.additionalUserInfo.profile);
    //      dispatch(login(user.additionalUserInfo.profile))
    //      navigation.navigate("Home")
    //    }
    //  }).catch(err => console.log(err));
   };
   return (
     <View style={styles.buttonContainer}>
       <TouchableOpacity
         style={styles.button_second}
         onPress={() =>
           onGoogleButtonPress().then(() =>
             console.log('Signed in with Google!'),
           )
         }>
         <Text style={styles.buttonText}>Đăng nhập bằng tài khoản google</Text>
     </TouchableOpacity>
   </View>
   );
 };
 
 export default App;