import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceProviderInterface {
  id?: string;
  user_id: string;
  insurance_plans?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface InsuranceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  insurance_plans?: string;
}
