'use server';

import { createHash, Hash } from 'crypto'

export function sha256(text: string): string {
    const hash: Hash = createHash('sha256');
    hash.update(text);
    return hash.digest('hex');
}