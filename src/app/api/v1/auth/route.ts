import { response } from "@/controllers/Response"
import { cookies }  from "next/headers";

export async function GET(): Promise<Response> {
    try {
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
    } catch (error: unknown) {
        return response(
            false,
            "Internal server error"
        );
    }
}