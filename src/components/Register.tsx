"use client";

import { FormEvent } from "react";

export function RegisterForm() {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target as HTMLFormElement))
        
        fetch('/api/user/register', {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then( response => response.json())
            .then(({message}) => {

            });
    }

    return (
        <form className="form login-form" onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" name="name"/>
            </label>
            <label>
                Email
                <input type="email" name="email"/>
            </label>
            <label >
                Password
                <input type="password" name="password"/>
            </label>
            <button className="bg-blue-700 text-white px-1 rounded w-full">Register</button>
        </form>
    );
}
