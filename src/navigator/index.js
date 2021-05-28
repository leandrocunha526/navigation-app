import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
const Stack = createStackNavigator();
import TabNavigator from "./TabNavigator";

export default function Index(){
    return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="Catálogo"
        component={TabNavigator}
        options={{headerTitleAlign: 'center'}}
    />
    </Stack.Navigator>
    </NavigationContainer>
    )
}
