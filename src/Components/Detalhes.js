import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'



export default function Detalhes({ handle, item, animais, animalFoto }) {
  const [observacao, setObservacao] = useState(false);
  const [observacoesDescricao, setObservacoesDescricao] = useState('');
  const [observacoesLocal, setObservacoesLocal] = useState('');
  const [observacoesData, setObservacoesData] = useState('');
  const [animaisId, setAnimaisId] = useState('');
  const [usuarioId, setUsuarioId] = useState('');
  const [error, setError] = useState(false);

  async function SalvarObservacao() {
    await fetch('http://10.139.75.23:5251/api/Observacoes/InsertObservacao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({       
        observacoesDescricao: observacoesDescricao,
        observacoesLocal: observacoesLocal,
        observacoesData: observacoesData,
        animaisId: animaisId,
        usuarioId: usuarioId
      })
    })
      .then(res => res.json())
      .then(json => {
        setObservacoesDescricao(json.ObservacoesDescricao);
        setObservacoesLocal(json.ObservacoesLocal);
        setObservacoesData(json.ObservacoesData);
        setAnimaisId(json.animaisId);
        setUsuarioId(json.usuarioId);
      })
      .catch(err => console.log(err));
  }

  async function Teste() {
    setObservacao(true);
  }

  return (
    <View>
      {observacao == false ?
        <View>                   
          <Text style={css.nome}>{item.animalNome}</Text>
          <Image style={css.foto} source={{ uri: item.animalFoto }}></Image>
          <Text style={css.campo}>{item.animalRaca}</Text>
          <Text style={css.campo}>{item.animalTipo}</Text>
          <Text style={css.campo}>{item.animalCor}</Text>
          <Text style={css.campo}>{item.animalSexo}</Text>
          <Text style={css.campo}>{item.animalObservacao}</Text>
          <Text style={css.campo}>{item.animalDtDesaparecimento}</Text>
          <Text style={css.campo}>{item.animalDtEncontro}</Text>
          <Text style={css.campo}>{item.animalStatus}</Text>
          <View style={css.botao}>
            <TouchableOpacity onPress={() => handle(false)} >
              <Text style={css.voltar}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Teste()} >
              <Text style={css.NovaObservacao}>Nova Observação</Text>
            </TouchableOpacity>
          </View>
        </View>
        :
        <View>
          <Text style={css.observacao}>Observação</Text>
          {observacao &&
            <View>
              <TextInput
                inputMode="text"
                style={css.input}
                value={observacoesDescricao}
                onChangeText={(digitado) => setObservacoesDescricao(digitado)}
                placeholderTextColor="#808080"
                placeholder='Descrição do animal'
              />
              <TextInput
                inputMode="text"
                style={css.input}
                value={observacoesLocal}
                onChangeText={(digitado) => setObservacoesLocal(digitado)}
                placeholderTextColor="#808080"
                placeholder='Local'
              />
              <TextInput
                inputMode="text"
                style={css.input}
                value={observacoesData}
                onChangeText={(digitado) => setObservacoesData(digitado)}
                placeholderTextColor="#808080"
                placeholder='Data'
              />              
            </View>
          }
          <View style={css.lado}>
          <TouchableOpacity onPress={() => handle(false)} >
              <Text style={css.voltar}>Voltar</Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => SalvarObservacao()}>
            <Text style={css.salvar}>Salvar</Text>
          </TouchableOpacity>
          </View>
        </View>
      }
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "sandybrown",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  voltar: {
    height: 40,
    padding: 10,
    width: 100,
    marginBottom: 15,
    textAlign: "left",
    borderRadius: 10,
    fontWeight: "bold",
  },
  foto: {
    width: 300,
    height: 300,
    borderRadius: 8,

  },
  campo: {
    backgroundColor: "#00B6B7",
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 6,
    padding: 12
  },
  nome: {
    fontWeight: "bold",
    marginTop: 20
  },
  observacao: {
    height: 40,
    padding: 10,
    width: 210,
    marginBottom: 15,
    textAlign: "right",
    borderRadius: 10,
    fontWeight: "bold",
  },
  botao: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  NovaObservacao:{
    height: 60,
    padding: 10,
    width: 100,
    marginBottom: 15,
    textAlign: "left",
    borderRadius: 10,
    fontWeight: "bold",
  },
  input:{
    width: 350,
    height: 55,
    borderWidth: 2,
    borderColor: "#FFCA00",
    borderRadius: 5,
    padding: 10,
    color: "black",
    marginTop:10
  },
  lado:{
    justifyContent:"space-between",
    flexDirection:"row"
  },
  salvar: {
    height: 40,
    padding: 10,
    width: 100,
    marginBottom: 15,
    textAlign: "right",
    borderRadius: 10,
    fontWeight: "bold",
  }
})



