'use client';

import { Ref, ReactElement } from "react";

export default function Input(
    { ref, placeholder }: {
        ref: Ref<HTMLInputElement>, 
        placeholder: string 
    }): ReactElement {
    return (
        <input 
            ref={ref} 
            className={`px-4 py-2 rounded-md bg-gray-100 ml-2 mt-2`} 
            type="text" 
            placeholder={placeholder} 
            required />
    )
}