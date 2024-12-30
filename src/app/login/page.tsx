'use client';

import { ReactElement, useRef } from "react";
import Header from "@/components/Header";
import Input from "@/components/accounts/Input";
import Link from "next/link";
import SubmitButton from "@/components/accounts/SubmitButton";

export default function Page() {
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <Header disbleLogin={true} />

            <main className={`mt-10 text-center flex`}>

                <div className="w-1/4"></div>


                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        
                        const id = idRef.current?.value;
                        const password = passwordRef.current?.value;

                        fetch('/api/v1/login', {
                            method: 'POST',
                            body: JSON.stringify({
                                "id": id,
                                "password": password
                            })
                        }).then((res) => {
                            if (res.status == 200) {
                                window.location.href = '/';
                            } else {
                                alert('Login failed');
                            }
                        });
                    }}
                    className={`mt-2 border-2 rounded w-full`} >
                    
                    <div className="h-2"></div>

                    <div className="text-2xl">
                        Login
                    </div>

                    <label className={`mt-2`}>
                        ID:
                        <Input ref={idRef} placeholder="ID" />
                    </label><br />

                    <label  className={`mt-2`}>
                        Password:
                        <Input ref={passwordRef} placeholder="Password" />
                    </label><br />


                    <div className="h-2"></div>

                    <SubmitButton color="blue">
                        Login
                    </SubmitButton>

                    <div>
                        if you don't have an account, 
                        <Link 
                            href="/register"
                            className="text-blue-500 hover:underline hover:cursor-pointer">register</Link>

                    </div>

                    <div className="h-2"></div>
                </form>

                <div className="w-1/4"></div>
            </main>
        </>
    )
}