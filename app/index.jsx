import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router'; 

const Index = () => {
  return (
    //The First Page youll see when opening the app
    <View className="flex-1 justify-center items-center bg-white">
      <Image
        className="mt-16"
        source={require('../assets/coffelogo.png')}
        style={{ width: 200, height: 200 }}
      />

      <Link href="/login" asChild>
        <TouchableOpacity 
          className="mt-16 p-4 w-60 flex-row items-center justify-center" 
          style={{ backgroundColor: '#9C8842', borderRadius: 30 }} 
        >
          
          <Image
            source={require('../assets/login.png')}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          <View style={{ width: 1, height: 24, backgroundColor: 'white', marginRight: 10 }} />
          <Text className="text-white font-light text-lg text-center">Log In</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/sign" asChild>
        <TouchableOpacity 
          className="mt-6 p-4 w-60 flex-row items-center justify-center"  
          style={{ backgroundColor: '#9C8842', borderRadius: 30 }}
        >
          <Image
            source={require('../assets/signup.png')}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
          <View style={{ width: 1, height: 24, backgroundColor: 'white', marginRight: 10 }} />
         
          <Text className="text-white font-light text-lg text-center">Sign Up</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Index;
