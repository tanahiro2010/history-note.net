'use client';

import { useSearchParams, redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { JSX } from 'react';

export default function Page(): JSX.Element {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');

    if (!query) {
        redirect('/');
    }

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async (query: string) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `/api/v1/search?q=${query}`);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    const ApiReponse = JSON.parse(xhr.responseText);
                    setData(ApiReponse);
                    setLoading(false);
                } else {
                    setError(xhr.statusText);
                    setLoading(true);
                }
            };
            xhr.send();
        };
    }, [query]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
        </>
    )
}