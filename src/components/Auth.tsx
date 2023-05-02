"use client";

import { useState } from "react";
import { RegisterForm } from "./Register";
import { LoginForm } from "./Login";

export function AuthComponent() {
    const [login, setLogin] = useState(true);

    const isVisible = (visible: boolean) => 
        !visible ? `invisible` : ''
    
    const handleLoginState = (visible: boolean) => {
        setLogin(visible);
    }

    return (
        <>
            <div className="auth-container">
                <div className={"register card rounded " + (!login ? 'show' : 'hide')}>
                    <RegisterForm />
                    <p className={isVisible(!login)}>{"Already have an account? "}<button onClick={() => handleLoginState(true)} className="text-blue-700">Login</button></p>
                </div>
                <div className={"login card rounded " + (login ? 'show' : 'hide')}>
                    <LoginForm />
                    <p className={isVisible(login)}>{"Don't have an account? "}<button onClick={() => handleLoginState(false)} className="text-blue-700">Sign up</button></p>
                </div>
            </div>
        </>
    )
}