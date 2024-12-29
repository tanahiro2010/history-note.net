'use client';

import { ReactElement, useEffect, useState } from "react"
import Link                                  from "next/link";

const headerStyle: string[] = [
    "w-full",
    "items-center",
    "shadow-md",
    "py-4",
    "px-5",
    "justify-between",
    "flex",
];

export default async function Header(): Promise<ReactElement> {
    const [authStatus, setAuthStatus] = useState<string>('');

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response: Response = await fetch('/api/v1/auth');
                const data: any = await response.json();
                setAuthStatus(data.status);
            } catch (error: any) {
                console.log(`Error: ${error}`);
            }
        };

        checkAuth();
    }, []);

    return (
        <div className={headerStyle.join(' ')}>
            <div className={`text-2xl text-bold ml-5 flex hover:bg-gray-200`}>
                <Link href={`/`}>
                    History
                </Link>
            </div>

            <div className={`mr-5`}>
                aa
            </div>
        </div>
    )
}