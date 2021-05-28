import React, {useCallback} from "react";
import {useNavigation} from "@react-navigation/native";
import {View, StyleSheet, Button, Text} from "react-native";

export default function Home(){
    const navigation = useNavigation();
    const goToScreen = useCallback(screen=> {
        navigation.navigate(screen);
}, []);

return (
   <View style={styles.container}>
    <Text style={styles.title}>Tela inicial</Text>
    <Button
    title="Itens"
    color="#0000ff"
    onPress={() => goToScreen("Items")}
    />
    <Button
    title="Carrinho"
    color="#0000ff"
    onPress={() => goToScreen("ShopCart")}
    />
    <Button
    title="Sobre o app"
    color="#0000ff"
    onPress={() => goToScreen("About")}
    />
   </View>
)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginBottom: 10
    },
    button: {
        marginVertical: '5%'
    }
});
