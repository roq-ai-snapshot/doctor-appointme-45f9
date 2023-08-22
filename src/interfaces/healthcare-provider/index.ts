import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareProviderInterface {
  id?: string;
  user_id: string;
  appointment_slots?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface HealthcareProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  appointment_slots?: string;
}
