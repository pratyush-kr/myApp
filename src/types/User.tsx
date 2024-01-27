import Role from "./Role";

export default interface user {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  roles: Role[];
}
