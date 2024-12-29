'use server';

export async function response(
    success: boolean,
    message: string = success ? "Success to the action" : "Failed to the action",
    body: null | string | object | any[] = null
): Promise<Response> {
    try {
        const response_body = JSON.stringify({
            "success": success,
            "message": message,
            "body": body,
        });

        return Promise.resolve(new Response(response_body, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "no-cache"
            },
            status: success ? 200 : 400
        }));
    } catch (error) {
        return Promise.resolve(new Response(
            JSON.stringify({
                success: false,
                message: "Internal server error",
                body: null
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ));
    }
}