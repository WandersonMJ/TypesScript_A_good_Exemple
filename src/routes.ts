import { Request, Response } from "express";
import createUser from './services/CreateUser';


//comands:
//yarn tsc --init
//yarn tsc

export function helloWorld(request: Request, response: Response){
const user = createUser({
  email:'wanderson.marques@fatecitapetininga.edu.br',
  password: '***',
  techs: [
    'Node.js',
    'ReactJs',
    'React Native',
    { title: 'JavaScript', experience: 70}
  ],
  espec: [
    "Estou aprendendo",
    "e guardando conhecimento"
  ]
});

  return response.json({ message: 'Hello World'});
}