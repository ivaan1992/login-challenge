import Users from "@db/users";
import fs from 'fs/promises';
import path from "path";

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
