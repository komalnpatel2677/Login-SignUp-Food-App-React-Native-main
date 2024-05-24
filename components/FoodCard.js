import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ShoppingBagIcon } from 'react-native-heroicons/solid'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function FoodCard({ item, index }) {
  const navigation = useNavigation();

  return (
    <Animatable.View
      delay={index * 120}
      animation="slideInRight"
      style={{
        width: 200,
        height: 400,
        marginVertical: 8,
        marginHorizontal: 8,
        padding: 20,
        paddingTop: 25,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.2)',
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <Image source={item.image} style={{ height: 200, width: 200 }} />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 10, marginTop: 10 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ color: 'white' }}>{item.ingredients}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>${item.price}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FoodDetails', { ...item })}>
          <ShoppingBagIcon size={25} color="black" />
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}