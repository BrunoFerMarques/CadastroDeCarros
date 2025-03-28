import { Car } from "./Car";

export interface Client {
    name: string,
    password: string,
    birthdate: string,
    email: string,
    telephone: string,
    logged: boolean,
    announcements: Car[]
}
  