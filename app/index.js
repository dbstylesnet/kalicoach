import { StyleSheet, View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pull ups</Text>
            <Text style={styles.caption}>5 excercises</Text>
            <Text style={styles.text}>Push ups</Text>
            <Text style={styles.caption}>5 excercises</Text>
            <Text style={styles.text}>Dips</Text>
            <Text style={styles.caption}>5 excercises</Text>
            <Text style={styles.text}>Squats</Text>
            <Text style={styles.caption}>5 excercises</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#171b2a",
        justifyContent: "center",
        width: '100%',
        height: '100px',
        color: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '0px',
    }  ,
    caption: {
        color: '#fff',
        fontSize: '10px',
        fontWeight: 'normal',
        marginBottom: '20px',
    }       
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         backgroundColor: "#171b2a",
//         justifyContent: "center",
//         width: '200px',
//         height: '100px',
//         color: '#fff',
//     }    
// });

// const Container = styled.View`
//     flex: 1;
//     background: red;    

// `;

export default HomeScreen;
