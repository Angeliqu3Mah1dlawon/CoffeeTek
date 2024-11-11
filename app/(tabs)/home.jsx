import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    //Mainpage of the app
    <ImageBackground 
      source={require('../../assets/bg.jpg')} 
      style={{ flex: 1 }} 
    >
      
      <ScrollView className="px-4">
        <View className="flex-row items-center mt-4 mb-4 bg-[#E8D7B8] rounded-full shadow-md">
          {/* Search Bar*/}
          <Image
            source={require('../../assets/search.png')} 
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
          <TextInput
            placeholder="Search coffee.."
            style={{
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 20,
              backgroundColor: 'transparent',
            }}
          />
        </View>
       {/* Educational content link, on developing*/}
        <Text className="mt-2 mb-2 text-sm font-light">Educational Content</Text>
        <Link href="/home" asChild>
        {/* Box stylesheet*/}
          <TouchableOpacity 
            className="flex-row justify-start items-start" 
            style={{
              backgroundColor: 'beige',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#9C8842',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 5,
              paddingVertical: 20,
              paddingHorizontal: 5,
            }}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text className="text-xl font-light text-black mb-2">
                Everything you need to know about coffee
              </Text>
              <Text className="text-sm font-light text-gray-500">
                Discover tips, facts, and more about your favorite brew.
              </Text>
            </View>

            <Image
              source={require('../../assets/everything.png')}
              style={{ width: 120, height: 120 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Link>
        <Text className="mt-2 mb-2 text-sm font-light">Coffee Making Tips</Text>
        <Link href="/home" asChild>
          <TouchableOpacity 
            className="flex-row justify-start items-start" 
            style={{
              backgroundColor: 'beige',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#9C8842',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 5,
              paddingVertical: 20,
              paddingHorizontal: 5,
            }}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text className="text-xl font-light text-black mb-2">
                How to grind and drink leisurely
              </Text>
              <Text className="text-sm font-light text-gray-500">
                Your ultimate guide on brewing your coffee.
              </Text>
            </View>

            <Image
              source={require('../../assets/maker.jpg')}
              style={{ width: 120, height: 120 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Link>
        {/* Button that links to Coffee.jsx page*/}
        <Link href="/coffee" asChild>
          <TouchableOpacity 
            className="flex-row justify-center items-center mt-6" 
            style={{
              backgroundColor: '#D7C9A8',
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: '#9C8842',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <Image
              source={require('../../assets/kape.png')}
              style={{ width: 30, height: 30, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text className="text-lg font-light text-black">Coffee Picker</Text>
          </TouchableOpacity>
        </Link>
        {/* Button that Links to Beans.jsx*/}
        <Link href="/beans" asChild>
          <TouchableOpacity 
            className="flex-row justify-center items-center mt-6" 
            style={{
              backgroundColor: '#D7C9A8',
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: '#9C8842',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <Image
              source={require('../../assets/beans.png')}
              style={{ width: 30, height: 30, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text className="text-lg font-light text-black">Coffee Beans</Text>
          </TouchableOpacity>
        </Link>
        {/* Check your loyalty points here /still on development */}
        <Link href="/home" asChild>
          <TouchableOpacity 
            className="flex-row justify-center items-center mt-6 mb-4" 
            style={{
              backgroundColor: '#FFB319',
              borderRadius: 40,
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: '#9C8842',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <Image
              source={require('../../assets/crown.png')}
              style={{ width: 30, height: 30, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text className="text-lg font-light text-black">Loyalty Points</Text>
          </TouchableOpacity>
        </Link>
        {/* Numerical Data of your app*/}
        <Link href="data" asChild>
          <TouchableOpacity 
            className="flex-row justify-center items-center mt-2 mb-4" 
            style={{
              backgroundColor: '#00AE58',
              borderRadius: 40,
              paddingVertical: 15,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: '#9C8842',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <Image
              source={require('../../assets/data.png')}
              style={{ width: 30, height: 30, marginRight: 10 }}
              resizeMode="contain"
            />
            <Text className="text-lg font-light text-black">Numerical Data</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
