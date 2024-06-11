import { View, Text, TextInput, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Busca() {
    const [animais, setAnimais ] = useState( [] );
    const [error, setError ] = useState(false);
    const [busca, setBusca] = useState(false);
    const [filtro, setFiltro ] = useState(false);

    async function getAnimais()
    {
        await fetch('http://10.139.75.23:5251/api/Animais/GetAllAnimais/', {
            method: 'GET',
            headers: {
              'content-type': 'application/json'
            }
          })
            .then( res => ( res.ok == true ) ? res.json() : false )
            .then( json => setAnimais( json ) )
            .catch( err => setError( true ) )
    }

    useEffect( () => {
        getAnimais();
    }, [] );

    useEffect( () => {
        setFiltro( animais.filter( (item) => item.animalNome == busca )[0] );
    }, [busca] );

    return (
        <View style={css.container}>
            <View style={css.searchBox}>
                <TextInput
                    style={css.search}
                    placeholder="Buscar animais"
                    placeholderTextColor="#808080"
                    TextInput={busca}
                    onChangeText={(digitado) => setBusca( digitado ) }
                />
            </View>
            { filtro && <Text style={css.text}>{filtro.animalNome}</Text> }
            { ( !filtro && busca ) && <ActivityIndicator size="large" color="#808080" /> }
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
    },
    text: {
        color: "black"
    },
    searchBox: {
        width: "100%",
        height: 100,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    search: {
        width: "90%",
        height: 55,
        borderWidth: 2,
        borderColor: "#FFCA00",
        borderRadius: 5,
        padding: 10,
        color: "black"
    }
})