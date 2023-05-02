"use client";
import { useRouter } from "next/navigation";
import { deleteCookie } from 'cookies-next';

export function Logout() {
    const router = useRouter();

    const handleLogout = () => {
        deleteCookie('auth-x');
        router.push('/auth');
    }

    return (
        <button className="bg-blue-700 text-white px-5 rounded" onClick={handleLogout}>Logout</button>
    )
}