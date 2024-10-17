import { StyleSheet, View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>asd sFirst screen 2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "red",
        justifyContent: "center",
        width: '200px',
        height: '100px',
    }    
});

// const Container = styled.View`
//     flex: 1;
//     background: red;    

// `;

export default HomeScreen;
