import { addUser } from "@/utils/users";

export async function POST(request: Request) {
    const {email, name, password} = await request.json();

    await addUser({email, name, password});
    
    return new Response(JSON.stringify({
        message: `Registrado el usuario ${name}`
    }));
}
