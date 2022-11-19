import { Logo } from '../Logo'
import { GoogleLogo } from 'phosphor-react'
import { useContext } from 'react'
import { AuthGoogleContext } from '../contexts/authGoogle'
import { Navigate } from 'react-router-dom'

export function SignIn() {
    const { signInGoogle, signed } = useContext(AuthGoogleContext)

    async function handleGoogleSignIn() {
        await signInGoogle()
    }

    if (!signed) {
        return (
            <>
                <div className='flex flex-col items-center mt-28'>
                    <Logo />

                    <span className='max-w-[144px] text-center text-gray-700 mt-10'>Com organização e tempo, acha-se o segredo de fazer tudo e bem feito...</span>

                    <span className='mt-10 font-semibold text-xl'>Comece agora mesmo!</span>

                    <div className='p-1 mt-10 bg-gradient-to-r from-green-700  to-green-400 rounded'>
                        <button
                            className=' p-1 bg-white flex gap-2 items-center justify-center w-[656px] h-14 rounded-sm'
                            onClick={() => handleGoogleSignIn()}
                        >
                            <GoogleLogo
                                size={24}
                            />
                            <span className='text-lg font-medium '>
                                Entrar com Google
                            </span>
                        </button>
                    </div>
                </div>
            </>
        )
    } else {
        return <Navigate to="/home" />
    }
}