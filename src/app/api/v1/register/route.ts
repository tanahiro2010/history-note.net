'use server';

import { sha256 }         from "@/controllers/security/sha256";
import { DatabaseLoader } from "@/controllers/database/load";
import { response }       from "@/controllers/Response"

const loader: DatabaseLoader = new DatabaseLoader();

export default async function POST(req: Request): Promise<Response> {
    const {
        userId,
        userName,
        userMail,
        password 
    }: { 
        userId:   string,
        userName: string,
        userMail: string
        password: string 
    } = await req.json();

    const userDatabase: any[] = loader.userDatabase();
    const existUser: undefined | any[] = userDatabase.find((user: any) => user['id'] == userId);

    if (existUser) {
        return response(
            false,
            "The id used."
        );
    }

    if (
        userId.replace(' ', '') == ""   || 
        userName.replace(' ', '') == "" || 
        userMail.replace(' ', '') == "" || 
        password.replace(' ', '') == ""
    ) { // 全てちゃんと入力されていなかったら
        return response(
            false,
            "parameter is void."
        );
    }

    if (
        userId.length   <= 3 ||
        userName.length <= 1 ||
        userMail.length <= 5 ||
        password.length <= 4
    ) { // データの文字数が足りなかったりしたら
        return response(
            false,
            "data length is mini."
        );
    }

    const userData: any = {
        "id":       userId,
        "name":     userName,
        "mail":     userMail,
        "password": sha256(password)
    };



    return response(
        true,
        "Success to register account."
    )
}