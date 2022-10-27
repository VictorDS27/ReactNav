import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function HomeScreen({navigation}) {
 return (
    <View style={styles.bloco}>
        <Text>Hello Mundu</Text>
        
        <TouchableOpacity
          onPress={()=>navigation.navigate("SaoPaulo")}>

            <Text>
                São Paulo
            </Text>
        </TouchableOpacity>
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