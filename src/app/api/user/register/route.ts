import { encrypt } from "@/utils/password";
import { addUser, getUser, userExists } from "@/utils/users";
import { User } from '../../../../utils/users';

export async function POST(request: Request) {
    const {email, name, password} = await request.json();
    const encryptedPWSD = await encrypt(password);
    const user: User = {email, name, password: encryptedPWSD as string};

    if(userExists(email))
        return new Response(JSON.stringify({
            message: `El usuario ya existe`,
        }));

    await addUser(user);
    
    return new Response(JSON.stringify({
        message: `Registrado el usuario ${name}`,
    }));
}
