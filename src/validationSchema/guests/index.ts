import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  appointment_bookings: yup.string().nullable(),
  insurance_plan: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
