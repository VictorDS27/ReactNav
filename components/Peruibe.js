import React,{useEffect, useState, } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Api from './Api';

export default function Peruibe({navigation}) {
    const [setDados, dados] = useState("");
    useEffect(
        ()=>{
             async function previsao(){
              const response = await Api.get(`weather?array_limit=10&fields=only_results,temp,city_name,forecast,max,min,date,description&key=c58f4f95&city_name=Peruibe,SP`);
                setDados(response.data.results.forecast);
            }
            previsao();
        },[]);
 return (
    <View style={styles.bloco}>
        <Text>Cidade de Peruibe jkkkkkkk</Text>

        <FlatList 
        data={dados}
          renderItem={({item})=>{
            return(
              <View>
                <Text style={styles.subtitle}>Data: {"date"}</Text>
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