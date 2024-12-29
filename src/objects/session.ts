import { Security } from "./security";
import { User } from "./user";

export interface session {
    sessionToken: string;
    userData: User;
    security: Security;
}