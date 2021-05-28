import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
const Stack = createStackNavigator();
import TabNavigation from "./TabNavigation";

export default function Index(){
    return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
        name="Catálogo"
        component={TabNavigation}
        options={{headerTitleAlign: 'center'}}
    />
    </Stack.Navigator>
    </NavigationContainer>
    )
}
