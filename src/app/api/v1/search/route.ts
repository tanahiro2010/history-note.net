'use server';

import { response } from "@/controllers/Response"

export async function GET(req: Request): Promise<Response> {
    const url = req.url;
    return response(
        true,
        "Success to get search data",
        {
            "url": url
        }
    );
}