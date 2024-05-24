import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../components/redux/action';

export default function CartScreen( props ) {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const calculateTotalPrice = () => {
    return cartData.cartItems.reduce((total, cartItem) => {
        // Ensure that the item has an 'id' before calculating the total price
        if (cartItem.id) {
          return total + cartItem.price * cartItem.quantity;
        }
        return total;
      }, 0);
    };


    const renderItem = ({ item }) => {
        const cartItem = props.route.params.find((paramItem) => paramItem.id === item.id);
    
        if (!cartItem) {
            return (
                <View>
                    <Text>Invalid items</Text>
                </View>
            );
          }

    return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
      <Image style={{ width: 50, height: 50, borderRadius: 10 }} source={item.image} />
      <View>
      <Text>{cartItem.name}</Text>
      <Text>Quantity: {cartItem.quantity}</Text>
          <Text>Total Price: ${cartItem.price.toFixed(2) * cartItem.quantity}</Text>
        </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => handleDecrement(cartItem)}>
          <Text style={{ fontSize: 18, marginHorizontal: 5 }}>-</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16 }}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleIncrement(cartItem)}>
          <Text style={{ fontSize: 18, marginHorizontal: 5 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveFromCart(cartItem)}>
          <Text style={{ fontSize: 18, color: 'red', marginLeft: 10 }}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
    };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {cartData.cartItems.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cartData.cartItems}
          renderItem={renderItem}
          keyExtractor={(cartItem) => (cartItem.id? cartItem.id.toString():Math.random().toString())}
        />
      )}
      <View style={{ marginTop: 20 }}>
        <Text>Total Price: ${calculateTotalPrice().toFixed(2)}</Text>
      </View>
    </View>
  );
}
