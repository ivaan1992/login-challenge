"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { setCookie } from "cookies-next";
import toastr from "toastr";

export function RegisterForm() {

    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target as HTMLFormElement))
        
        fetch('/api/user/register', {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then( async response => {
                if(response.status != 200)
                    throw await response.json();

                return response.json();
            })
            .catch(({message}) => {
                toastr.error(message);
            })
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
