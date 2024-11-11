import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


const SignUp = () => {
  return (
    //Sign up ui for your page
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        className="mt-16"
        source={require('../assets/coffelogo.png')}
        style={{ width: 150, height: 150 }}
      />

      <View className="mt-10 w-80">
      <TextInput 
          className="border p-4 mb-4 rounded-lg" 
          placeholder="Name:" 
          keyboardType="email-address" 
          style={{ borderColor: '#9C8842' }}
        />
        <TextInput 
          className="border p-4 mb-4 rounded-lg" 
          placeholder="Email:" 
          keyboardType="email-address" 
          style={{ borderColor: '#9C8842' }}
        />
        <TextInput 
          className="border p-4 mb-4 rounded-lg" 
          placeholder="Password:" 
          secureTextEntry 
          style={{ borderColor: '#9C8842' }}
        />
        <TextInput 
          className="border p-4 mb-4 rounded-lg" 
          placeholder="Confirm Password:" 
          secureTextEntry 
          style={{ borderColor: '#9C8842' }}
        />
        <Link href="/login" asChild>
  <TouchableOpacity 
    className="mt-6 p-4 w-full flex-row items-center justify-center" 
    style={{ backgroundColor: '#907032', borderRadius: 30 }}
  >
   
    <Image
      source={require('../assets/signup.png')}
      style={{ width: 24, height: 24, marginRight: 10 }}
    />
    <View style={{ width: 1, height: 24, backgroundColor: 'white', marginRight: 10 }} />
    
    <Text className="text-white text-center text-lg">Register</Text>
  </TouchableOpacity>
</Link>

      </View>
    </View>
  );
};

export default SignUp;
