'use server';

import { DatabaseLoader } from "@/controllers/database/load";
import { DatabaseWriter } from "@/controllers/database/save";
import { sha256 }         from "@/controllers/security/sha256";
import { response }       from "@/controllers/Response"
import { User }           from "@/objects/user";


const loader: DatabaseLoader = new DatabaseLoader();
const writer: DatabaseWriter = new DatabaseWriter();

export default async function POST(req: Request): Promise<Response> {
    const {
        id,
        name,
        mail,
        password 
    }: User = await req.json();

    let userDatabase: any[] = loader.userDatabase();
    const existUser: undefined | User[] = userDatabase.find((user: any) => user['id'] == id);

    if (existUser) {
        return response(
            false,
            "The id used."
        );
    }

    if (
        id.replace(' ', '') == ""   || 
        name.replace(' ', '') == "" || 
        mail.replace(' ', '') == "" || 
        password.replace(' ', '') == ""
    ) { // 全てちゃんと入力されていなかったら
        return response(
            false,
            "parameter is void."
        );
    }

    if (
        id.length   <= 3 ||
        name.length <= 1 ||
        mail.length <= 5 ||
        password.length <= 4
    ) { // データの文字数が足りなかったりしたら
        return response(
            false,
            "data length is mini."
        );
    }

    const userData: User = {
        "id":       id,
        "name":     name,
        "mail":     mail,
        "password": sha256(password)
    };

    userDatabase.push(userData);

    writer.userDatabaseWrite(userDatabase);

    return response(
        true,
        "Success to register account."
    )
}