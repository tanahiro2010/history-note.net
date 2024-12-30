'use server';

import { userDatabasePath, sessionDatabasePath, noteDatabasePath } from "./config";
import { readFileSync }                                            from "fs";
import { User }                                                    from "@/objects/user";
import { Session }                                                 from "@/objects/session";

export class DatabaseLoader {
    constructor() {
        return;
    }

    private load(path: string): any[] {
        return JSON.parse(readFileSync(path, {
            encoding: 'utf-8'
        }));
    }

    public userDatabase(): User[] {
        return this.load(userDatabasePath);
    }

    public sessionDatabase(): Session[] {
        return this.load(sessionDatabasePath);
    }

    public noteDataPath(): Object[] {
        return this.load(noteDatabasePath);
    }
}