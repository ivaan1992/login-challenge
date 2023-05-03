import { AuthComponent } from "@/components/Auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Auth() {
    const cookieStore = cookies();

    if(cookieStore.get('auth-x')) {
        redirect('/user');
    }
    
    return (
        <main className="Auth flex flex-row justify-between items-center min-h-screen min-w-full">
            <section className="flex flex-col justify-center items-center auth-section w-full md:w-1/2 bg-white bg-opacity-50 min-h-screen">
                <AuthComponent />
            </section>
            <section className="dectoration-section w-0 md:w-1/2 min-h-screen md:visible flex justify-center items-center relative invisible">
                <div className="ball w-96 h-96 bg-blue-700 rounded-full"></div>
                <div className="blurr absolute h-1/2 w-full bottom-0"></div>
            </section>
        </main>
    )
}