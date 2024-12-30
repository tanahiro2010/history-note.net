'use server';

import { response } from "@/controllers/Response"

export async function POST(req: Request): Promise<Response> {
    const { id, password }: {
        id: string,
        password: string
    } = await req.json();
    return response(
        true,
        "Success to login",
        {
            "id": id,
            "password": password
        }
    );
}