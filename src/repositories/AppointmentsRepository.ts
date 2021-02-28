import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  //Inicio: Verifica se existem agendamentos na mesma DATA
  public async findByDate(date: Date): Promise<Appointment | null> {
     const findAppointment = await this.findOne({
      where: { date },
     });

      return findAppointment || null;
  }
  //Fim
}

export default AppointmentsRepository;