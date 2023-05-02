import bycript from 'bcryptjs';

export async function comparePassword(password: string, encrypted: string): Promise<boolean> {
    return await bycript.compare(password, encrypted);
}

export async function encrypt(password: string): Promise<string> {
    const salt = await bycript.genSalt(10);
    return await bycript.hash(password, salt) as string;
}
