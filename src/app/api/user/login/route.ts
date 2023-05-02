import { generateToken, getUser } from "@/utils/users";

export async function POST(request: Request) {
    const {email, password} = await request.json();

    try {
        const user = await getUser({email, password});
        const token = generateToken(user);

        return new Response(JSON.stringify({
            user: {
                email: user.email,
                name: user.name,
                token,
            }
        }), {
            status: 200,
        });
        
    } catch(err) {
        return new Response(JSON.stringify({
            error: err
        }), {
            status: 500
        });
    }
}