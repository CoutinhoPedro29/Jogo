
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import app from './App';


let a=0;
export default function Login(props) 
{
  let a=0;
  const [login, setlogin] = useState("");
  const [Senha, setSenha] = useState("");
  const [resultado, setResultado] = useState('Pedro');
  
  const [resultado2, setResultado2] = useState('123456');
  const [Logado, setLogado] = useState(true);
  
  const atualizaSenha = (value) => {
      setSenha(value);
  }
 const atualizalog = (value) => {setlogin(value);}
 
 const onTestPress = () => {
    
    if ( login === resultado & Senha ===resultado2)
    {
        
    alert("logado");
    a=+1;
                

    }
  else{
    alert("errado");
  }}
    if(a>0)  

    {
      app()
      return(<View>
    </View>
    );
    }
    else{
  


    return (
      <View style={styles.container}>
    <app> </app>
        <Text>Login:</Text>
        <TextInput 
            onChangeText={atualizalog}
            style={styles.input}
            value={login}
            placeholder="Login:"
        
            ></TextInput>
        <Text>Senha:</Text>
        <TextInput 
            onChangeText={atualizaSenha}
            style={styles.input}
            value={Senha}
            placeholder="Senha:"
        
            ></TextInput>
        <Button
          title="Login"
          onPress={onTestPress}
        ></Button>
         
      </View>
      
    );
  }}

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
