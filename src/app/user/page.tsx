import { Logout } from "@/components/Logout";
import { decodeToken, getUserFromEmail } from "@/utils/users";
import { getUser } from "@/utils/users";
import { cookies } from "next/headers";

import '@/styles/clock.scss';
import dynamic from "next/dynamic";
import { NasaImages } from "@/components/NasaImages";

export default async function Home() {
    const cookieStore = cookies();
    const token = cookieStore.get('auth-x')?.value as string;
    const {email} = decodeToken(token);
    const user = getUserFromEmail(email);
    const DynamicClock = dynamic(() => import('@/components/Clock'), {
        ssr: false
    })
    return (
        <div>
            <h1>Bienvenido {user?.name}</h1>
            <Logout />
            <DynamicClock />
            <NasaImages />
        </div>
    )
}
