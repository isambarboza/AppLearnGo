import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Inserir from './Perfil';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cadastroScreen, setCadastroScreen] = useState(false)
    const { Login, error } = useContext(AuthContext);

    function RealizaLogin() {
        Login(email, senha);
    }

    function Teste() {
        setCadastroScreen(true)
    }
    function Voltar()
    {
        setCadastroScreen(false)
    }


    if (cadastroScreen) {
        return (
            <>
                <Inserir />
                <TouchableOpacity style={css.btnVoltar} onPress={Voltar}>
                <Text style={css.btnVoltarText}>Voltar</Text>
            </TouchableOpacity>
            </>
        )
    }

    return (
        <ScrollView contentContainerStyle={css.container}>
            <Image source={require("../../assets/logo.png")} style={css.logo} />
            <TextInput
                inputMode="email"
                placeholder="E-mail do Usuário"
                style={css.input}
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
                placeholderTextColor="#808080"
            />
            <TextInput
                inputMode="text"
                placeholder="Senha"
                secureTextEntry={true}
                style={css.input}
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
                placeholderTextColor="#808080"
            />
            <View style={css.forgot}>
                <TouchableOpacity onPress={() => Teste()} >
                    <Text style={css.forgotText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                <Text style={css.btnLoginText}>Entrar</Text>
            </TouchableOpacity>
            {error &&
                <View style={css.error}>
                    <Text style={css.errorText}>Revise os campos.Tente novamente!</Text>
                </View>
            }
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "white"
    },
    logo: {
        width: "90%",
        resizeMode: "contain"
    },
    input: {
        width: "90%",
        height: 50,
        borderRadius: 8,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#FFCA00",

    },
    forgot: {
        width: "80%",
        marginTop: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "#808080",
        fontWeight: "bold",


    },
    btnLogin: {
        width: "90%",
        height: 50,
        borderRadius: 8,
        marginTop: 30,
        backgroundColor: "#00B6B7",

    },
    btnLoginText: {
        color: "black",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "#272323",
        textAlign: "center"
    },
    btnVoltarText:{
    height: 40,
    width: 100,
    color: "black",
    lineHeight: 30,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
    }
});