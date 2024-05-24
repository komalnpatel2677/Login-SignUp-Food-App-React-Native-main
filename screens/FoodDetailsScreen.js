import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {  ChevronLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid'
import { HeartIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { addToCart,removeFromCart,incrementQuantity,decrementQuantity } from '../components/redux/action';
import {  useDispatch, useSelector } from 'react-redux';
//import  reducer  from '../components/redux/reducer';
//import { cartItems } from '../constants'
//import { Button } from 'react-native-paper'

export default function FoodDetailsScreen(props) {
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
    

    const cartData = useSelector((state)=>state.cart);
    const [isAdded,setIsAdded]=useState(false)
    const [quantity, setQuantity]= useState(1);

    const cartItemsCount = cartData.cartItems.length;

    

    const handleAddToCart=()=> {
        if (props.route && props.route.params){
        dispatch(addToCart({...props.route.params,quantity}));
       // dispatch(incrementQuantity({...props.route.params,quantity}));
        }
    };

    const handleRemoveFromCart=()=> {
        if (props.route && props.route.params){
        dispatch(removeFromCart({...props.route.params,quantity}));
       // dispatch(decrementQuantity({ ...props.route.params, quantity }));
        }
    };

    const handleIncrement=()=>{
        setQuantity(quantity+1);
    };

    const handleDecrement=()=>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
        
    };

    useEffect(() => {
        let result = cartData.cartItems.filter((element)=>
            element.name===props.route.params.name);
        
        if (result.length){
            setIsAdded(true)
        }else{
            setIsAdded(false)
        }
    },[cartData]);

    const handleCartPress = () => {
        navigation.navigate('Cart');
      };
    
      
   
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <Image style={{borderBottomLeftRadius: 50, borderBottomRightRadius: 50,height:450,width:'100%',position:'absolute'}} source={require('../assets/images/background.png')} 
        blurRadius={40}  />
        <SafeAreaView>
            <View style={{flexDirection:'row', justifyContent:'space-between', margin:16,alignItems:'center' }}>
               
                <TouchableOpacity onPress={()=> navigation.goBack()} style={{backgroundColor:'white',borderRadius:20,padding:12, shadowColor:'black',shadowOffset:{width:0,height:2},shadowOpacity:0.2,shadowRadius:4 }}>
                    <ChevronLeftIcon size="23" stroke={50} color="black" />
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={handleCartPress} style={{backgroundColor:'white',borderRadius:60,padding:12,shadowColor:'black',shadowOffset:{width:0,height:2},shadowOpacity:0.2,shadowRadius:4 }}>
                   <View style={{flexDirection:'row',alignItems:'center'}}>
                    <ShoppingCartIcon  size="26" color="black" />
                    <Text style={{backgroundColor:'white',color:'black',fontSize:20,borderRadius:10,padding:2}}>{cartItemsCount}</Text>
                    </View>
                </TouchableOpacity>
               
                <TouchableOpacity style={{backgroundColor:'white',borderRadius:20,padding:12,shadowColor:'black',shadowOffset:{width:0,height:2},shadowOpacity:0.2,shadowRadius:4 }}>
                    <HeartIcon size="23" color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{ height: 200, width: 200,marginTop: 220 }} source={props.route.params.image} />
                <Text style={{ fontSize: 20, color: 'black' }}> {props.route.params.name}</Text>
            </View>
            <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 150,
          }}>
                <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'gray',
              borderRadius: 20,
              marginTop: 90,
              paddingHorizontal: 10,
             
            }}>
                    <TouchableOpacity onPress={handleDecrement} style={{
                borderRadius: 40,
                backgroundColor: 'white',
                borderWidth: 4,
                borderColor: 'gray',
                padding: 10,
              }}>
                        <MinusIcon size="20" strokeWidth={1.8} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, color: 'black',fontWeight: 'bold' }}>{quantity}</Text>
                    <TouchableOpacity onPress={handleIncrement} style={{
                borderRadius: 40,
                backgroundColor: 'white',
                borderWidth: 4,
                borderColor: 'gray',
                padding: 10,
                
              }}
>
                        <PlusIcon size="20" strokeWidth={1.8} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: 8,
                    overflow: 'hidden',
                    height: 200,
                  }}
            > 
                <Animatable.View 
                    delay={180}
                    animation="slideInDown"
                    style={{ flex: 1, alignItems: 'center', marginVertical: 2}}>

                    <Image source={require('../assets/icons/calories.png')} style={{ height: 24, width: 24 }}/>
                    <Text style={{ fontWeight: '600' }}>130 cal</Text>
                </Animatable.View>
                <Animatable.View 
                    delay={280}
                    animation="slideInDown"
                    style={{ flex: 1, alignItems: 'center', marginVertical: 8 }}>
                    <Image source={require('../assets/icons/clock.png')} style={{ height: 24, width: 24 }}/>
                    <Text style={{ fontWeight: '600' }}>15-20 min</Text>
                </Animatable.View>
                <Animatable.View 
                    delay={380}
                    animation="slideInDown"
                    style={{ flex: 1, alignItems: 'center', marginVertical: 8 }}>
                    <Image source={require('../assets/icons/chat.png')} style={{ height: 24, width: 24 }}/>
                    <Text style={{ fontWeight: '600' }}>4.6 vote</Text>
                </Animatable.View>
                <Animatable.View 
                    delay={480}
                    animation="slideInDown"
                    style={{ flex: 1, alignItems: 'center', marginVertical: 8 }}>
                    <Image source={require('../assets/icons/weight.png')} style={{ height: 24, width: 24 }}/>
                    <Text style={{ fontWeight: '600' }}>350 g</Text>
                </Animatable.View>
            </View>
           
            
            
            <View style={{ marginLeft: 10, marginTop: 0, marginBottom: 30,height:20}}>


                <Animatable.Text
                animation="slideInUp"
                style={{ fontSize: 25,marginTop: 0, fontWeight: 'bold', color: '#333',textAlign:'center',marginLeft: 6, marginBottom: 0,height:30}}>
                    Description
                </Animatable.Text>
               
                <Animatable.Text
                delay={100} animation="slideInUp"
                 style={{color:'gray',marginTop: 0,fontSize:15,letterSpacing:1,height:400,padding:10,marginLeft: 6,transform:[
                    {
                        translateY:300,
                    },
                 ],
                 }}>{props.route.params.desc}</Animatable.Text>
         </View>
            {/* add to cart button */}
            <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Animatable.Text delay={100} animation="slideInLeft" style={{padding:130,paddingHorizontal:25,borderRadius:20,fontSize:25}}>
                    ${props.route.params.price*quantity}
                </Animatable.Text>
                {
                    isAdded?(
                
                <Animatable.View delay={100} animation="slideInRight">
                   
                    
                    <TouchableOpacity onPress={handleRemoveFromCart} style={{marginHorizontal:6,flexDirection:'row',justifyContent:'space-between',alignItems:'center',flex:1}}>
                        <Text style={{padding:10,backgroundColor:'black',color:'white', fontSize:20,marginHorizontal:20,borderRadius:10, fontWeight:600}}>Remove from Cart</Text>
                    </TouchableOpacity> 
                    </Animatable.View> )
                    :(
                    <Animatable.View delay={100} animation="slideInRight">
                    <TouchableOpacity onPress={handleAddToCart} style={{marginHorizontal:6,flexDirection:'row',justifyContent:'space-between',alignItems:'center',flex:1}}>
                        <Text style={{padding:10,backgroundColor:'black',color:'white', fontSize:20,marginHorizontal:20,borderRadius:10, fontWeight:600}}>Add to Cart</Text>
                    </TouchableOpacity>
                    
                    </Animatable.View>)
}

            </View>
        </SafeAreaView>
    </View>
  );
}
