import React, {useCallback} from "react";
import {useNavigation} from "@react-navigation/native";
import {View, StyleSheet, Button, Text} from "react-native";

export default function ShopCart() {
    const navigation = useNavigation();
    const goToScreen = useCallback(screen => {
        navigation.navigate(screen);
    }, []);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Carrinho de compra</Text>
        <Button title="Tela inicial" color="#0000ff" onPress={() => goToScreen("Home")}/>
        <View style={styles.button}>
        <Button
        title="Itens"
        color="#0000ff"
        onPress={() => goToScreen("Items")}
        />
        <Button
        title="Contato"
        color="#0000ff"
        onPress={() => goToScreen("About")}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        marginVertical: '5%'
    },
    title: {
        marginBottom: 10
    }
})
