import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  appointment_slots: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
