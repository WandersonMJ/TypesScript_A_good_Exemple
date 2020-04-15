
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<String | TechObject>;
  espec: String[];
}

export default function createUser({ name = '', email, password, techs, espec }: CreateUserData){
  const user = {
    name,
    email,
    password,
    techs,
    espec
  }
  return user;
}