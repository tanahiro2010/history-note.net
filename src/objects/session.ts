import { Security } from "./security";
import { User } from "./user";

export interface Session {
    sessionToken: string;
    userData: User;
    security: Security;
}