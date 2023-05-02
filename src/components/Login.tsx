"use client";

export function LoginForm() {
    return (
        <form className="form login-form">
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
