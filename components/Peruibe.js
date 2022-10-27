import React,{useEffect, useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Peruibe({navigation}) {
    useEffect(
        ()=>{
            function teste(){
                console.warn("Teste da useEffect");
            }
            teste();
        },[]
    );
 return (
    <View style={styles.bloco}>
        <Text>Cidade de Peruibe jkkkkkkk</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    bloco:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});