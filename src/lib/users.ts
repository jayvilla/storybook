import fetch, { Response } from 'node-fetch';
import { SignUpFormValues } from '../components/signup/types';

export const UsersAPI = {
  createUser: async (formValues: SignUpFormValues): Promise<Response> => {
    let headers = {
      'Content-Type': 'application/json',
    };

    const body = JSON.stringify({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      phoneNumber: formValues.phoneNumber,
    });

    const requestOptions = {
      method: 'POST',
      headers,
      body,
    };

    return fetch('http://localhost:9001/users', requestOptions);
  },
};
