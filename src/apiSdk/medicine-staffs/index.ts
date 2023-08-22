import axios from 'axios';
import queryString from 'query-string';
import { MedicineStaffInterface, MedicineStaffGetQueryInterface } from 'interfaces/medicine-staff';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMedicineStaffs = async (
  query?: MedicineStaffGetQueryInterface,
): Promise<PaginatedInterface<MedicineStaffInterface>> => {
  const response = await axios.get('/api/medicine-staffs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMedicineStaff = async (medicineStaff: MedicineStaffInterface) => {
  const response = await axios.post('/api/medicine-staffs', medicineStaff);
  return response.data;
};

export const updateMedicineStaffById = async (id: string, medicineStaff: MedicineStaffInterface) => {
  const response = await axios.put(`/api/medicine-staffs/${id}`, medicineStaff);
  return response.data;
};

export const getMedicineStaffById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/medicine-staffs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMedicineStaffById = async (id: string) => {
  const response = await axios.delete(`/api/medicine-staffs/${id}`);
  return response.data;
};
