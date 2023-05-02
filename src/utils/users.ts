import Users from "@db/users";
import fs from 'fs/promises';
import path from "path";
import jwt from 'jsonwebtoken';

import { comparePassword } from "./password";

export interface User {
    name: string;
    email: string;
    password: string;
};

export async function addUser(user: User) {
    const currentUsers = [...Users, user];

    const usersDBFlder = path.relative(process.cwd(), 'src');
    const usersDBFile = path.join(usersDBFlder, '/db/users.json');

    await fs.writeFile(usersDBFile, JSON.stringify(currentUsers));
}

export function userExists(email: string) {
    const user: User | undefined = Users.find((user: User) => user.email == email);

    return user != null;
}

export async function getUser({
    email,
    password}: {email: string, password: string}
) {
    const user: User | undefined = Users.find((user: User) => user.email == email);
    if(!user) throw "User not found";

    const correctPassword = await comparePassword(password, user.password);

    if(!correctPassword) throw "User not found";
    
    return user;
}

export function getUserFromEmail(email: string): User | undefined {
    const user: User | undefined = Users.find((user: User) => user.email == email);
    return user;
}

export function generateToken(user: User): string {
    // Remove passsword just to make sure...
    user.password = "";
    const token = jwt.sign(user, process.env.SALT as string);

    return token;
}

export function decodeToken(token: string): User {
    const user: User = jwt.verify(token, process.env.SALT as string) as User;
    return user;
}
