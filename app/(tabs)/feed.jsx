import { View, Text, ImageBackground, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Feed = () => {
  return (
    //Page where u can see other users thoughts on coffee related topics
    <ImageBackground source={require('../../assets/bg.jpg')} style={{ flex: 1 }}>
      <ScrollView className="px-4">
        <Text className="text-left text-lg font-light mt-6">Community Feed</Text>

        <View
          className="flex-row items-start mt-4 bg-[#E8D7B8] rounded-lg p-4 shadow-lg space-x-3"
          style={{ marginBottom: 10 }}
        >
          <Image //User Profile Picture
            source={require('../../assets/user.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          {/* Username*/}
          <View className="flex-1">
            <Text className="font-bold text-base">Rizza Lynn Repompo</Text>
            {/* User Post content*/}
            <Text className="text-sm text-gray-600 mt-1">
              Has Anybody visited Coffee Co? I love their Americano!
            </Text>
            <View className="flex-row space-x-4 mt-2">
              <TouchableOpacity>
                <Image
                  source={require('../../assets/heart.png')}
                  style={{ width: 20, height: 20,marginRight:100 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/share.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          className="flex-row items-start mt-4 bg-[#E8D7B8] rounded-lg p-4 shadow-lg space-x-3"
          style={{ marginBottom: 10 }}
        >
          <Image
            source={require('../../assets/user.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View className="flex-1">
            <Text className="font-bold text-base">Angelique Mahidlawon</Text>
            <Text className="text-sm text-gray-600 mt-1">
              Having a coffee in a rainy afternoon at Star Bucks.
            </Text>
            <View className="flex-row space-x-4 mt-2">
              <TouchableOpacity>
                <Image
                  source={require('../../assets/heart.png')}
                  style={{ width: 20, height: 20, marginRight:100  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/share.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          className="flex-row items-start mt-4 bg-[#E8D7B8] rounded-lg p-4 shadow-lg space-x-3"
          style={{ marginBottom: 10 }}
        >
          <Image
            source={require('../../assets/user.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View className="flex-1">
            <Text className="font-bold text-base">Erikka Laine Daplinan</Text>
            <Text className="text-sm text-gray-600 mt-1">
              Coffee and books – the perfect combination for a cozy evening.
            </Text>
            <View className="flex-row space-x-4 mt-2">
              <TouchableOpacity>
                <Image
                  source={require('../../assets/heart.png')}
                  style={{ width: 20, height: 20, marginRight:100  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/share.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          className="flex-row items-start mt-4 bg-[#E8D7B8] rounded-lg p-4 shadow-lg space-x-3"
          style={{ marginBottom: 10 }}
        >
          <Image
            source={require('../../assets/user.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View className="flex-1">
            <Text className="font-bold text-base">James Kent Dacuyan</Text>
            <Text className="text-sm text-gray-600 mt-1">
              Trying out Coffee and Bread for the first time!
            </Text>
            <View className="flex-row space-x-4 mt-2">
              <TouchableOpacity>
                <Image
                  source={require('../../assets/heart.png')}
                  style={{ width: 20, height: 20, marginRight:100 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/share.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          className="flex-row items-start mt-4 bg-[#E8D7B8] rounded-lg p-4 shadow-lg space-x-3"
          style={{ marginBottom: 10 }}
        >
          <Image
            source={require('../../assets/user.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View className="flex-1">
            <Text className="font-bold text-base">Rizza Lynn Repompo</Text>
            <Text className="text-sm text-gray-600 mt-1">
              Have you thought about visiting Star Pugs?!
            </Text>
            <View className="flex-row space-x-4 mt-2">
              <TouchableOpacity>
                <Image
                  source={require('../../assets/heart.png')}
                  style={{ width: 20, height: 20, marginRight:100 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/share.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          className="flex-row items-start mt-4 bg-[#E8D7B8] rounded-lg p-4 shadow-lg space-x-3"
          style={{ marginBottom: 10 }}
        >
          <Image
            source={require('../../assets/user.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View className="flex-1">
            <Text className="font-bold text-base">Angelique Mahidlawon</Text>
            <Text className="text-sm text-gray-600 mt-1">
              Espresso shots in the morning wake me up like nothing else.
            </Text>
            <View className="flex-row space-x-4 mt-2">
              <TouchableOpacity>
                <Image
                  source={require('../../assets/heart.png')}
                  style={{ width: 20, height: 20, marginRight:100 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/share.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          className="flex-row items-start mt-4 bg-[#E8D7B8] rounded-lg p-4 shadow-lg space-x-3"
          style={{ marginBottom: 10 }}
        >
          <Image
            source={require('../../assets/user.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View className="flex-1">
            <Text className="font-bold text-base">Erikka Laine Daplinan</Text>
            <Text className="text-sm text-gray-600 mt-1">
              Ever tried adding cinnamon to your coffee? It’s life-changing!
            </Text>
            <View className="flex-row space-x-4 mt-2">
              <TouchableOpacity>
                <Image
                  source={require('../../assets/heart.png')}
                  style={{ width: 20, height: 20, marginRight:100 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/share.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          className="flex-row items-start mt-4 bg-[#E8D7B8] rounded-lg p-4 shadow-lg space-x-3"
          style={{ marginBottom: 10 }}
        >
          <Image
            source={require('../../assets/user.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View className="flex-1">
            <Text className="font-bold text-base">James Kent Dacuyan</Text>
            <Text className="text-sm text-gray-600 mt-1">
              Been experimenting with French press – the flavor is so rich!
            </Text>
            <View className="flex-row space-x-4 mt-2">
              <TouchableOpacity>
                <Image
                  source={require('../../assets/heart.png')}
                  style={{ width: 20, height: 20, marginRight:100 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/share.png')}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Feed;
