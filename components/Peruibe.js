import React,{useEffect, useState, } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Api from './Api';

export default function Peruibe({navigation}) {
    const [setDados, dados] = useState("");
    useEffect(
        ()=>{
             async function previsao(){
              const response = await Api.get(`weather?key=c58f4f95&city_name=Campinas,SP`);
                setDados(response.data.results.forecast);
            }
            previsao();
        },[]);
 return (
    <View style={styles.bloco}>
        <Text>Cidade de Peruibe jkkkkkkk</Text>

        <FlatList 
        data={dados}
          renderItem={({setDados})=>{
            return(
              <View>
               <setDados />
              </View>
            )
          }} 
          />
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