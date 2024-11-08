import { Car } from "./Car";

export interface Client {
    name: string,
    password: string,
    age: string,
    email: string,
    telephone: string,
    announcements: Car
}
  