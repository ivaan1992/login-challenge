"use client";

import { FormEvent } from "react";
import { setCookies } from 'cookies-next';
import { useRouter } from "next/navigation";
import toastr from "toastr";

export function LoginForm() {
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target as HTMLFormElement))
        
        fetch('/api/user/login', {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then( async response => {
                if(response.status != 200) {
                    throw await response.json()
                }

                return response.json();
            })
            .then(({user}) => {
                setCookies('auth-x', user.token);
                router.push('/user')
                toastr.success(`Welcome back ${user.name} !`);
            })
            .catch(({error}) => {
                toastr.error(error);
            })
    }
    return (
        <form className="form login-form" onSubmit={handleSubmit}>
            <label>
                Email
                <input type="email" name="email"/>
            </label>
            <label >
                Password
                <input type="password" name="password"/>
            </label>

            <button className="bg-blue-700 text-white px-1 rounded w-full">Sign in</button>
        </form>
    );
}
