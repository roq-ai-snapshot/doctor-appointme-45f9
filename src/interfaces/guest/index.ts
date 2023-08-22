import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  user_id: string;
  appointment_bookings?: string;
  insurance_plan?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  appointment_bookings?: string;
  insurance_plan?: string;
}
