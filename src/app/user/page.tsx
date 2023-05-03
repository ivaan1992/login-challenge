import { Logout } from "@/components/Logout";
import { decodeToken, getUserFromEmail } from "@/utils/users";
import { getUser } from "@/utils/users";
import { cookies } from "next/headers";

import '@/styles/clock.scss';
import dynamic from "next/dynamic";
import { NasaImages } from "@/components/NasaImages";
import { getNasaImage } from "@/utils/nasa";
import { UserIcon } from "@/resources/userIcon.svg";

export default async function Home() {
    const cookieStore = cookies();
    const token = cookieStore.get('auth-x')?.value as string;
    const {email} = decodeToken(token);
    const user = getUserFromEmail(email);
    const DynamicClock = dynamic(() => import('@/components/Clock'), {
        ssr: false
    })
    const nasaImages = await getNasaImage();

    return (
        <main className="flex flex-col-reverse md:flex-row w-full min-h-screen justify-start items-stretch gap-6">
            <aside className="flex bg-white bg-opacity-50">
                <nav className="flex justify-between items-center p-1 flex-row w-full md:flex-col">
                    <div className="user-info flex justify-between md:w-full items-center flex-col">
                        <UserIcon className="fill-white flex justify-center items-center"/>
                        <h1 className="text-lg text-white text-center">{user?.name}</h1>
                    </div>
                    <Logout />
                </nav>
            </aside>
            <aside className="main-content flex flex-col justify-between items-stretch h-auto md:min-h-screen w-full">
                <h1 className="text-2xl text-white font-semibold text-center">Bienvenido {user?.name}</h1>
                <DynamicClock />
                <NasaImages images={nasaImages}/>
            </aside>
        </main>
    )
}
