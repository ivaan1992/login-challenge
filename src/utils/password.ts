import bycript from 'bcryptjs';

export async function comparePassword(password: string, encrypted: string): Promise<boolean> {
    const encryptedPswd = await encrypt(password);

    return encryptedPswd === encrypted;
}

export async function encrypt(password: string): Promise<string | unknown> {
    const salt: string = process.env.SALT as string;
    return await bycript.hash(password, salt) as Promise<string> | unknown;
}
