import { Note } from "./nota.module";
export interface User {
  id: number,
  name: string,
  lastname: String,
  phone: String,
  email: string,
  password: String,
  note: any[]
}