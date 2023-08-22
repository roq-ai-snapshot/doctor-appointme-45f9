import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MedicineStaffInterface {
  id?: string;
  user_id: string;
  patient_profiles?: string;
  appointment_bookings?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface MedicineStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  patient_profiles?: string;
  appointment_bookings?: string;
}
