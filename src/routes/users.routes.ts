/*
Rota de Usuários
*/
import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
 try{
   const   { name, cpf, birthdate, email, password } = request.body;

   const createUser = new CreateUserService();

   const user = await createUser.execute({ 
    name, 
    cpf,
    birthdate,
    email,
    password, 
    });
 
    return response.json(user);
 } catch(err) {
   return response.status(400).json({ error: err.message });
 }
});

export default usersRouter;
