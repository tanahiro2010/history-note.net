import { response } from "@/controllers/Response"
import { cookies }  from "next/headers";

export async function GET(): Promise<Response> {
    try {
        // 明示的な型定義を追加
        const cookieStore = await cookies();
        const sessionToken = cookieStore.get('token');

        if (!sessionToken) {
            return response(
                false,
                "You didn't login."
            );
        }


        const tokenValue: string = sessionToken.value;

        return response(
            true,
            "Success to get user data",
            {

            }
        );
    } catch (error: unknown) {  // エラーの型も定義
        return response(
            false,
            "Internal server error"
        );
    }
}