import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Detalhes from '../Components/Detalhes';
import { useFocusEffect } from '@react-navigation/native';


export default function Home() {

  const [animais, setAnimais] = useState([]);
  const [error, setError] = useState(false)
  const [detalhes, setDetalhes] = useState(false);
  const [item, setItem] = useState();

  async function getAnimais() {

    await fetch('http://10.139.75.23:5251/api/Animais/GetAllAnimais/', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setAnimais(json))
      .catch(err => console.log( err ) )
  }

  useFocusEffect(
    React.useCallback(() => {
      getAnimais();
    }, [])
  );
  useEffect(() => {
    getAnimais();
  }, []);

  function exibirDetalhes(item) {
    setItem(item);
    setDetalhes(true);
  }
  function renderAnimais({ item }) {
    return (
      <View style={css.container}>
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
        />
        <View style={css.button}>
          <TouchableOpacity onPress={() => exibirDetalhes(item)}>
            <Text style={css.botao}>Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View style={css.container}>
      {animais.length > 0 && !detalhes &&
        <>
          <FlatList style={css.FlatList}
            data={animais}
            renderItem={renderAnimais}
            keyExtractor={(item) => item.animaisId}
            contentContainerStyle={css.listContainer}
          />
        </>
      }
      {
        !animais && !detalhes &&
        <Text style={css.text}>Nenhum animal encontrado!</Text>
      }
      {detalhes && <Detalhes handle={setDetalhes} item={item} />}
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    color: "black",
    fontSize: 18,
  },
  listContainer: {
    paddingBottom: 20,
  },
  flatlist: {
    width: "100%"
  },
  botao: {
    color: "black",
    lineHeight: 45,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    width: "100%",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#00B6B7",

},
button:{
  width: "100%",
  height: 40,
}
  
})