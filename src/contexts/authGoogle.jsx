import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebase";
import { api } from "../services/api";
const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})

export function AuthGoogleProvider({ children }) {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState("")
    const auth = getAuth(app);

    useEffect(() => {
        function loadStoreAuth() {
            const localToken = localStorage.getItem('token')
            const localUser = localStorage.getItem('user')
            if (localToken && localUser) {
                setUser(localUser)
            }
        }
        loadStoreAuth()
    }, [])

    function signInGoogle() {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                // user.getIdToken(true)
                //     .then((token) => {
                //         setTokenId(token)
                //         sessionStorage.setItem('@AuthFirebase:tokenId', token)
                //         api.defaults.headers.common['authorization'] = token
                //     })
                // setUser(JSON.stringify(user))
                // sessionStorage.setItem('@AuthFirebase:token', token)
                // sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
                console.log(user)
                // async function login() {
                const response = await api.post('/users/signin', {
                    _id: user.uid,
                    name: user.displayName,
                    email: user.email
                })
                localStorage.setItem('user', JSON.stringify(response.data.user))
                localStorage.setItem('token', response.data.token)
                console.log(response.data)
                setUser(JSON.stringify(response.data.user))
                api.defaults.headers.common['authorization'] = response.data.token
                // }
                // login()

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    function signOut() {
        localStorage.clear()
        setUser(null)
    }

    return (
        <AuthGoogleContext.Provider
            value={{ signInGoogle, signed: !!user, user, signOut, token }}
        >
            {children}
        </AuthGoogleContext.Provider>
    )
}