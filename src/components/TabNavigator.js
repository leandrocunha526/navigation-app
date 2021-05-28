import React from "react";
import {Text} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

import {Home, ShopCart, Items, About} from "../pages/index";

export default function TabNavigator(){
return(
    <Tab.Navigator>
      <Tab.Screen
      name="Home"
      component={Home}
      options={{
          tabBarIcon: () => {
              return <Icon name="home-outline" color="#000000" style={{ paddingRight: 15 }} size={18}/>;
          },
          tabBarLabel: ({focused, color})=> {
            return(
              <Text style={{color: focused ? color: "#000000"}}>Home</Text>
            )
          }
      }}/>

      <Tab.Screen
      name="Items"
      component={Items}
      options={{
          tabBarIcon: () => {
              return <Icon name="albums-outline" color="#000000" style={{ paddingRight: 15 }} size={18}/>;
          },
          tabBarLabel: ({focused, color})=> {
            return (
                <Text style={{color: focused ? color: "#000000"}}>Itens</Text>
            )
          }
      }}/>

      <Tab.Screen
      name="ShopCart"
      component={ShopCart}
      options={{
          tabBarIcon: () => {
              return <Icon name="cart-outline" color="#000000" style={{ paddingRight: 15 }} size={18}/>;
          },
          tabBarLabel: ({focused, color})=> {
            return (
                <Text style={{color: focused ? color: "#000000"}}>Carrinho</Text>
            )
          }
      }}/>

      <Tab.Screen
      name="About"
      component={About}
      options={{
          tabBarIcon: () => {
              return <Icon name="document-outline" color="#000000" style={{ paddingRight: 15 }} size={20}/>;
          },
          tabBarLabel: ({focused, color})=> {
            return (
              <Text style={{color: focused ? color: "#000000"}}>Sobre o app</Text>
            )
          }
      }}/>
    </Tab.Navigator>
)
}
