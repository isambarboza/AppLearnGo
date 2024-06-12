import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import React from 'react'

export default function Inserir() {
  const [usuarioNome, setUsuarioNome] = useState();
  const [usuarioTelefone, setUsuarioTelefone] = useState();
  const [usuarioEmail, setUsuarioEmail] = useState();
  const [usuarioSenha, setUsuarioSenha] = useState();

  async function InsertUsuario() {
    await fetch('http://10.139.75.23:5251/api/Usuarios/InsertUsuario', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset-UTF-8',
      },
      body: JSON.stringify({
        usuarioTelefone: usuarioTelefone,
        usuarioEmail: usuarioEmail,
        usuarioNome: usuarioNome,
        usuarioSenha: usuarioSenha
      })
    })
      .then((response) => response.json() )
      .then( json => { setUsuarioTelefone(''), setUsuarioEmail(''), setUsuarioNome(''),  setUsuarioSenha('') })
      .catch(err => console.log(err));
  }
  return (
    
    <View style={styles.container}>
      <Text style={styles.cadastro}>Faça seu cadastro</Text>
      <TextInput
        inputMode="text"
        placeholder='Nome'
        style={styles.input}
        value={usuarioNome}
        onChangeText={(digitado) => setUsuarioNome(digitado)}
        placeholderTextColor='#808080'
      />
      <TextInput
        inputMode="text"
        placeholder='Telefone'
        style={styles.input}
        value={usuarioTelefone}
        onChangeText={(digitado) => setUsuarioTelefone(digitado)}
        placeholderTextColor='#808080'
      />
      <TextInput
        inputMode="text"
        placeholder='E-mail'
        style={styles.input}
        value={usuarioEmail}
        onChangeText={(digitado) => setUsuarioEmail(digitado)}
        placeholderTextColor='#808080'
      />
      <TextInput
        inputMode="text"
        placeholder='Senha'
        style={styles.input}
        value={usuarioSenha}
        onChangeText={(digitado) => setUsuarioSenha(digitado)}
        placeholderTextColor='#808080'
      />
      <TouchableOpacity style={styles.btn} onPress={() => InsertUsuario()}>
        <Text style={styles.btnText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  },
  input: {
    width: "90%",
    height: 55,
    borderWidth: 2,
    borderColor: "#FFCA00",
    borderRadius: 5,
    padding: 10,
    color: "black",
    marginTop:10
},
btn: {
  width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 0,
    backgroundColor: "#00B6B7"
},
btnText: {
  color: "black",
    lineHeight: 45,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
},
cadastro:{
  marginLeft:75,
  height: 50,
  padding: 10,
  width: 210,
  marginBottom: 15,
  borderRadius: 10,
  fontWeight: "bold",
}
})