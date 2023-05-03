"use client";
import { useRouter } from "next/navigation";
import { deleteCookie } from 'cookies-next';
import { LogoutIcon } from "@/resources/logoutIcon.svg";

export function Logout() {
    const router = useRouter();

    const handleLogout = () => {
        deleteCookie('auth-x');
        router.push('/auth');
    }

    return (
        <button className="bg-blue-700 text-white px-5 rounded" onClick={handleLogout}>
            <LogoutIcon className="fill-white"/>
        </button>
    )
}