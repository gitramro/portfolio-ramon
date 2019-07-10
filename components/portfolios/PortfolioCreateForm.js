import React from 'react';
import moment from 'moment';
import { Formik, Form, Field } from 'formik';
import { Button,Alert } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key] && key !== 'endDate') {
      errors[key] = `Field ${key} is required!`;
    }
  });


  
  const startDate = moment(values.startDate);
  const endDate = moment(values.endDate);

  if (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = 'End Date cannot be before start date!!!';
  }

  return errors;
}


const PortfolioCreateForm = ({onSubmit,error,initialValues}) => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field  type="text" label="Title" name="title" component={PortInput} />
          <Field  type="text" label="Company" name="company" component={PortInput} />
          <Field  type="text" label="Location" name="location" component={PortInput} />
          <Field  type="text" label="Position" name="position" component={PortInput} />
          <Field  type="textarea" label="Description" name="description" component={PortInput} />
          <Field  label="Start Date" initialDate={initialValues.startDate} name="startDate" component={PortDate} />
          <Field label="End Date" initialDate={initialValues.endDate} name="endDate" canBeDisabled={true} component={PortDate} />
          {error && 
            <Alert color="danger">
              {error}
            </Alert>
          }

          <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;