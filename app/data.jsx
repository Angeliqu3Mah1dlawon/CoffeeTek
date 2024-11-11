import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const Data = () => {
  return (
    //Analytics, Data gathered on the apps users
    <View className="flex-1 bg-[#E8D7B8]">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Image 
          source={require('../assets/cofes.png')} 
          style={{ width: '100%', height: 250, borderRadius: 10, marginBottom: 16, resizeMode: 'contain' }} 
        />
        <Text className="text-xl font-semibold mb-2">Count on Coffee Flavor Preferences</Text>
        <Image 
          source={require('../assets/piechart.png')} 
          style={{ width: '100%', height: 250, borderRadius: 10, marginBottom: 16, resizeMode: 'contain' }} 
        />

        <Text className="text-xl font-semibold mb-2">Number of Customers Browsed on Coffee Stalls</Text>
        <Image 
          source={require('../assets/barchart.png')} 
          style={{ width: '100%', height: 250, borderRadius: 10, resizeMode: 'contain' }} 
        />

      </ScrollView>
    </View>
  );
};

export default Data;
