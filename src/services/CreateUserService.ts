import { getRepository } from 'typeorm'
import User from '../models/Users';

interface Request {
  name: string;
  cpf: string;
  birthdate: Date;
  email:string;
  password: string;
}

class CreateUserService {
    public async execute({ name, cpf, birthdate, email, password }: Request): Promise<User> {
      const usersRepository = getRepository(User);

      const checkUserExists = await usersRepository.findOne({
        where: { email },
      });

      if(checkUserExists) {
        throw new Error('Email address already used.');
      }

      const user = usersRepository.create({
        name,
        cpf,
        birthdate,
        email,
        password,
      }); 
      await usersRepository.save(user);

      return user;
    }
  }


export default CreateUserService;