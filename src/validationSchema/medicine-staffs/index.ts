import * as yup from 'yup';

export const medicineStaffValidationSchema = yup.object().shape({
  patient_profiles: yup.string().nullable(),
  appointment_bookings: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
