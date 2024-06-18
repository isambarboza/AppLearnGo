import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(false);

    async function Login(email, senha) {
        if (email != "" && senha != "") {            
            await fetch('http://10.139.75.23:5251/api/Usuarios/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json; charset-UTF-8',
                },
                body: JSON.stringify({
                    usuarioEmail: email,
                    usuarioSenha: senha
                })
            })    
            .then(res => res.json())         
            .then(json => {
              if(json.usuarioId > 0) 
                {
                    setLogado(true);
                }            
             })
            .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;