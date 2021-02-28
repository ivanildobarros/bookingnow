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

    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    }
 
    return response.json(userWithoutPassword);
 } catch(err) {
   return response.status(400).json({ error: err.message });
 }
});

export default usersRouter;
