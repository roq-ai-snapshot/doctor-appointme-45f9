import * as yup from 'yup';

export const insuranceProviderValidationSchema = yup.object().shape({
  insurance_plans: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
