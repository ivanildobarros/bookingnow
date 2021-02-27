import { uuid } from 'uuidv4';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor({provider, date,  }: Omit<Appointment, 'id'> ) {// Omit recebe todos os valores menos o id (id está sendo criado fe forma dinamica uuid();)
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;