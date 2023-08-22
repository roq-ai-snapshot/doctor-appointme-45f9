import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createMedicineStaff } from 'apiSdk/medicine-staffs';
import { medicineStaffValidationSchema } from 'validationSchema/medicine-staffs';
import { UserInterface } from 'interfaces/user';
import { getUsers } from 'apiSdk/users';
import { MedicineStaffInterface } from 'interfaces/medicine-staff';

function MedicineStaffCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: MedicineStaffInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createMedicineStaff(values);
      resetForm();
      router.push('/medicine-staffs');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<MedicineStaffInterface>({
    initialValues: {
      patient_profiles: '',
      appointment_bookings: '',
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: medicineStaffValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Medicine Staffs',
              link: '/medicine-staffs',
            },
            {
              label: 'Create Medicine Staff',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Medicine Staff
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.patient_profiles}
            label={'Patient Profiles'}
            props={{
              name: 'patient_profiles',
              placeholder: 'Patient Profiles',
              value: formik.values?.patient_profiles,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.appointment_bookings}
            label={'Appointment Bookings'}
            props={{
              name: 'appointment_bookings',
              placeholder: 'Appointment Bookings',
              value: formik.values?.appointment_bookings,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/medicine-staffs')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'medicine_staff',
    operation: AccessOperationEnum.CREATE,
  }),
)(MedicineStaffCreatePage);
