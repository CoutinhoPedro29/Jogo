import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Cards(props) 
{
  
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(10);
  const [score, setScore] = useState(0);
  const [resultado, setResultado] = useState("");
  const [acertou, setAcertou] = useState(true);
  
  const atualizaResult = (value) => {
      setResultado(value);
  }

  const onTestPress = () => {
    let result = parseInt(resultado);

    if (result === (num2-num1))
    {
      //resposta correta
      setAcertou(true);
      setScore(score + 1);
      setNum1( Math.ceil( Math.random() * 10 ) );
      setNum2( Math.ceil( Math.random() * 10 ) );

    }
    else
    {
      //resposta incorreta
      setAcertou(false);
      setScore(score-1);
    }
    setResultado("");
  }

  if( score >= 5)
  {
    return ( 
        <View >
        <Text >Você venceu!</Text>
  </View>
    );
  }
  else
  {
    return (
      <View style={styles.container}>
        
        <Text>Jogo de Adivinhação</Text>
        <Text >{num1} + x = {num2} </Text>
        <TextInput 
            onChangeText={atualizaResult}
            style={styles.input}
            value={resultado}
            placeholder="Qual é o valor do x?"
        
            ></TextInput>
        <Button
          title="Confirmar"
          onPress={onTestPress}
        ></Button>
        <Text>Score: {score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

input: {
  fontSize: 35,
}
});