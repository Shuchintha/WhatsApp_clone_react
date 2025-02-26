import React from 'react'
import { Button } from '@material-ui/core'
import  './Login.css'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
function Login() {
    const [{}, dispatch] = useStateValue();
    
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user

            })
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://i.pinimg.com/originals/f7/5d/94/f75d94874d855a7fcfcc922d89ac5e80.png" />
                <div className="login_text">
                <h1> Sign in to Chat</h1>
                </div>
                <Button onClick={signIn}>
                Sign in with google
                </Button>
            </div>
        </div>
    )
}

export default Login
