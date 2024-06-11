import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Detalhes from '../Components/Detalhes';


export default function Home() {

  const [animais, setAnimais] = useState([]);

  async function getAnimais() {
    await fetch('http://10.139.75.23:5251/api/Animais/GetAllAnimais/', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setAnimais(json))
      .catch(err => console.log(err))
  }
  

  useEffect(() => {
    getAnimais();
  }, [])

  return (
    <View style={css.container}>
      {animais ?
        <>
          <FlatList
            data={animais}
            renderItem={({ item }) => 
          
            <Produto
            animalNome={item.animalNome} 
            animalRaca={item.animalRaca} 
            animalTipo={item.animalTipo} 
            animalCor={item.animalCor} 
            animalSexo={item.animalSexo} 
            animalObservacao={item.animalObservacao} 
            animalFoto={item.animalFoto}
            animalDtDesaparecimento={item.animalDtDesaparecimento} 
            animalDtEncontro={item.animalDtEncontro}
            animalStatus={item.animalStatus}
             />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ height: (animais.length * 600) + 110 }}
          />
        </>
        :
        <Text style={css.text}>Carregando animais...</Text>
      }
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    color: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black"
  },
  
})