'use server';

import { readFileSync } from "fs";
import { userDatabasePath, sessionDatabasePath, noteDatabasePath } from "./config";
import { init } from "next/dist/compiled/webpack/webpack";

export class DatabaseLoader {
    constructor() {
        return;
    }

    private load(path: string): any[] {
        return JSON.parse(readFileSync(path, {
            encoding: 'utf-8'
        }));
    }

    public userDatabase(): Object[] {
        return this.load(userDatabasePath);
    }

    public sessionDatabase(): Object[] {
        return this.load(sessionDatabasePath);
    }

    public noteDataPath(): Object[] {
        return this.load(noteDatabasePath);
    }
}