
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Switch, Text, View } from 'react-native';
import { useColorScheme } from "nativewind";
import ProductList from './components/ProductList';

export default function App() {


  const { colorScheme, toggleColorScheme } = useColorScheme();


  return (
    <SafeAreaView className=" bg-gray-100 dark:bg-black">
      <View className=" py pl-8 flex items-center  flex-row space-x-5">
        <Text className=" dark:text-white text-2xl font-bold ">New Products</Text>
        <Switch
          value={colorScheme === "dark"}
          onChange={toggleColorScheme} />
      </View>
      <ProductList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
