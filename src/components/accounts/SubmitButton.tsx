'use client';

import { ReactElement, useRef } from "react";

export default function SubmitButton({ color = "blue", children }: { color: string, children: any }): ReactElement {
    const buttonRef = useRef<HTMLButtonElement>(null);
    return (
        <button 
            className={`px-4 py-2 rounded-md bg-${color}-500 ml-2 hover:bg-${color}-600`} 
            ref={buttonRef} 
            type="submit" >
            {children}
        </button>
    );
}