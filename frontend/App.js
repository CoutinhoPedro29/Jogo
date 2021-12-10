
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cards from "./jogo";
import Login from "./login";

export default function app() {
 
  const[data, setData]= useState([{}]);

  useEffect( () => {
    
    fetch("http://localhost:5000/jogador").then(
      response  => response.json()).then(
      data1 => {
        setData(data1);
        console.log(data1);}
        
      )

  }, [])
  

return (
  
    <View>
      <Cards></Cards>
        
    {(typeof data.jogador ==='undefined')?
    (
      <p>Carregando....</p>
      

    ): (
      
      data.jogador.map((joga, i)=>(
        <p key={i}>{joga}</p>
    )))
      }
  
</View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
