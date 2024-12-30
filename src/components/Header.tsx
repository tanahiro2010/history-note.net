'use client';

import { ReactElement, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

const headerStyle: string[] = [
    "w-full",
    "items-center",
    "shadow-md",
    "py-4",
    "px-5",
    "justify-between",
    "flex",
];

export default function Header({ disbleLogin = false }: { disbleLogin?: boolean }): ReactElement {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // null: ローディング中
    const inputRef = useRef<HTMLInputElement>(null);

    // ログイン状態のチェック
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('/api/v1/auth', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setIsLoggedIn(data.success); // ログイン状態を更新
            } catch (error) {
                console.error('Error checking login status:', error);
                setIsLoggedIn(false); // エラー時は未ログインと見なす
            }
        };

        checkLoginStatus();
    }, []);

    // ローディング中の表示
    if (isLoggedIn === null) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (disbleLogin && isLoggedIn) {
        redirect('/');
    }


    return (
        <div className={headerStyle.join(' ')}>
            {/* ロゴ */}
            <div className="text-2xl font-bold ml-5 flex hover:bg-gray-200">
                <Link href={`/`}>
                    History
                </Link>
            </div>

            {/* 検索ボックス */}
            <div className="mr-5">
                <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        if (inputRef.current) {
                            window.location.href = `/search?q=${inputRef.current.value}`;
                        }
                    }}
                    className="flex border border-gray-300 rounded items-center justify-center"
                >
                    <input
                        type="text"
                        placeholder="記事を検索"
                        ref={inputRef}
                        className="p-2 flex-grow"
                    />
                    <button type="submit" className="p-2 bg-gray-200">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </form>
            </div>

            {/* ログイン/ログアウトリンク */}
            <div className="mr-5">
                {isLoggedIn ? (
                    <Link href={`/profile`} className="text-blue-500 hover:underline hover:cursor-pointer">
                        My Profile
                    </Link>
                ) : (
                    <Link href={`/login`} className="text-blue-500 hover:underline hover:cursor-pointer">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
}