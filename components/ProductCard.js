import { useColorScheme } from 'nativewind'
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
// importing icons 
import { AntDesign } from '@expo/vector-icons';

const ProductCard = ({ image, category, title, price, description }) => {

    const [count, setCount] = useState(1);
    const { colorScheme } = useColorScheme()

    return (
        <View className="w-full bg-white dark:bg-gray-50/10 p-5 rounded-3xl my-5">
            <View className=" bg-white rounded-xl">
                <Image source={{ uri: image }} className="w-full h-72 " style={{ resizeMode: "contain" }} />
            </View>
            <View className='mt-5 '>
                <Text className='text-sm text-black/60 dark:text-white/70'>{category}</Text>
                <Text className='text-lg font-semibold dark:text-white'>{title}</Text>
                <View className='flex-row items-center justify-between '>

                    <View className="flex-row  items-center gap-3   ">
                        <AntDesign
                            name="minuscircleo"
                            size={24}
                            color={colorScheme === "light" ? "black" : "white"}
                            onPress={() => setCount(count - 1)} />
                        <Text className='text-xl dark:text-white'>{count}</Text>
                        <AntDesign
                            name="pluscircleo"
                            size={24}
                            color={colorScheme === "light" ? "black" : "white"}
                            onPress={() => setCount(count + 1)} />
                    </View>
                    <Text className='text-2xl font-extrabold dark:text-white'>${price * count}</Text>
                </View>
                <Text className='mt-2 text-sm text-black/60 dark:text-white/70 ' numberOfLines={2}>{description}</Text>

                <TouchableOpacity className="bg-black justify-center dark:bg-white p-3 rounded-full flex-row w-10/12  mt-5  self-center shadow">
                    <Text className='text-white dark:text-black font-bold'> Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductCard