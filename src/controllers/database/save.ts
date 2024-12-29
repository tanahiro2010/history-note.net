import { writeFileSync } from "fs";
import { userDatabasePath, noteDatabasePath, sessionDatabasePath } from "./config";

export class DatabaseWriter {
    constructor () {
        return;
    }

    private write(path: string, database: Object[]): boolean {
        try {
            writeFileSync(
                path,
                JSON.stringify(database),
                {
                    encoding: 'utf-8'
                }
            );
        } catch {
            return false;
        }
        
        return true;
    }

    public userDatabaseWrite(database: Object[]): boolean {
        return this.write(userDatabasePath, database);
    }

    public noteDatabaseWrite(database: Object[]): boolean {
        return this.write(noteDatabasePath, database);
    }

    public sessionDatabaseWrite(database: Object[]): boolean {
        return this.write(sessionDatabasePath, database)
    }
}