import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Animal({ animalNome, animalRaca,animalTipo, animalCor, animalSexo, animalFoto, animalObservacao }) {
    return (
        <View style={css.container}>
            <View style={css.boxTitle}>
                <Text style={css.title}>{animalNome}</Text>
            </View>
            <View style={css.boxImage}>
                <Image source={{ uri: animalFoto }} style={css.imagem}/>
            </View>
            <View style={css.descriptionBox}>
                <Text style={css.descriptionText}>{animalObservacao}</Text>
            </View>
            <View style={css.categoryBox}>
                <Text style={css.categoryText}>{animalRaca}</Text>
                <Text style={css.categoryText}>{animalTipo}</Text>
                <Text style={css.categoryText}>{animalCor}</Text>
                <Text style={css.categoryText}>{animalSexo}</Text>
            </View>
            <TouchableOpacity style={css.detailsButton}>
                <Text style={css.detailsButtonText}>Detalhes</Text>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        width: "98%",
        height: 600,
        backgroundColor: "#FFCA00",
        marginTop:40,
        borderRadius: 8,
        marginBottom: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boxTitle: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        paddingLeft: 5
    },
    
    title: {
        color: "#333",
        fontSize: 18,
        fontWeight: "bold"
    },
    boxImage: {
        width: "100%",
        height: 390,
        borderRadius: 8,
        overflow: "hidden"
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    descriptionBox: {
        width: "100%",
        marginTop: 15,
        padding: 10,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 10,
    },
    descriptionText: {
        color: "#808080",
        textAlign: "justify"
    },
    categoryBox: {
        width: "100%",
        marginTop: 15,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    categoryText: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold"
    },
    detailsButton: {
        marginTop: 10,
        paddingVertical: 10,
        backgroundColor: "#00B6B7",
        borderRadius: 5,
        alignItems: "center",
    },
    detailsButtonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
})