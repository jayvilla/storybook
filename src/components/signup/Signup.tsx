import React from 'react';
import './Signup.scss';
import { TextInput } from '../textInput';
import { Button } from '../button';
import { VALIDATION_REGEX } from '../../utils';
import { UsersAPI } from '../../lib';
import {
  defaultSignUpFormErrors,
  defaultFormMessage,
  defaultSignUpFormValues,
  errorMessages,
} from './constants';
import { FormMessage, SignUpFormErrors, SignUpFormValues } from './types';

export type SignupProps = {
  title?: string;
  /* add these handlers */
  onError?: (e: React.FormEvent<HTMLFormElement>) => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Signup = (props: SignupProps) => {
  const [signUpFormValues, setSignUpFormValues] = React.useState<SignUpFormValues>(
    defaultSignUpFormValues,
  );
  const [formErrors, setFormErrors] = React.useState<SignUpFormErrors>(
    defaultSignUpFormErrors,
  );
  const [formMessage, setFormMessage] = React.useState<FormMessage>(defaultFormMessage);

  const handleSignUpFormChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpFormValues({
      ...signUpFormValues,
      [key]: e.target.value,
    });
  };

  const handleFormError = async (e?: React.FormEvent<HTMLFormElement>) => {
    props.onError?.(e);
    /* Handle Error */
  };

  const handleFormSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit?.(e);

    const validForm = validateForm();
    let user;

    if (!validForm) return;
    try {
      const response = await UsersAPI.createUser(signUpFormValues);
      user = await response.json();

      if (!response.ok) {
        const key = Object.keys(user.keyValue)[0];
        const value = user.keyValue[key];
        setFormMessage((prevState) => ({
          ...prevState,
          error: true,
          message: `${user.message} ${key}: ${value} already in use.`,
        }));
        return;
      }

      setSignUpFormValues(defaultSignUpFormValues);
      setFormErrors(defaultSignUpFormErrors);
      setFormMessage((prevState) => ({
        ...prevState,
        error: false,
        message: 'User successfully created.',
      }));
    } catch (e) {
      setFormMessage((prevState) => ({
        ...prevState,
        error: true,
        message: e.message,
      }));
    }
  };

  const validateForm = () => {
    let isFirstNameValid: boolean,
      isLastNameValid: boolean,
      isEmailValid: boolean,
      isPasswordValid: boolean,
      isConfirmPasswordValid: boolean,
      isPhoneNumberValid: boolean;
    for (let field in signUpFormValues) {
      switch (field) {
        case 'firstName': {
          isFirstNameValid = !!signUpFormValues.firstName.match(VALIDATION_REGEX['notEmpty']);
          break;
        }
        case 'lastName': {
          isLastNameValid = !!signUpFormValues.lastName.match(VALIDATION_REGEX['notEmpty']);
          break;
        }
        case 'email': {
          isEmailValid = !!signUpFormValues.email.match(VALIDATION_REGEX['email']);
          break;
        }
        case 'password': {
          isPasswordValid = !!signUpFormValues.password.match(VALIDATION_REGEX['password']);
          break;
        }
        case 'confirmPassword': {
          isConfirmPasswordValid =
            signUpFormValues.password === signUpFormValues.confirmPassword;
          break;
        }
        case 'phoneNumber': {
          isPhoneNumberValid = !!signUpFormValues.phoneNumber.match(
            VALIDATION_REGEX['phoneNumber'],
          );
          break;
        }
      }
    }

    setFormErrors((prevState) => ({
      ...prevState,
      firstName: {
        error: !isFirstNameValid,
        message: !isFirstNameValid ? errorMessages.firstName : '',
      },
      lastName: {
        error: !isLastNameValid,
        message: !isLastNameValid ? errorMessages.lastName : '',
      },
      email: {
        error: !isEmailValid,
        message: !isEmailValid ? errorMessages.email : '',
      },
      password: {
        error: !isPasswordValid,
        message: !isPasswordValid ? errorMessages.password : '',
      },
      confirmPassword: {
        error: !isConfirmPasswordValid,
        message: !isConfirmPasswordValid ? errorMessages.confirmPassword : '',
      },
      phoneNumber: {
        error: !isPhoneNumberValid,
        message: !isPhoneNumberValid ? errorMessages.phoneNumber : '',
      },
    }));

    return (
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isPhoneNumberValid
    );
  };

  const signUpClass = ['signup', 'flex', 'flex-row', 'justify-center'].join(' ');
  const formTitleClass = ['form-title', 'mb-8', 'text-center', 'text-2xl'].join(' ');
  const formMessageClass = [
    'signup-message',
    formMessage.error ? 'signup-message--error' : 'signup-message--success',
  ].join(' ');

  return (
    <div className={signUpClass}>
      <form onError={handleFormError} onSubmit={handleFormSubmit}>
        <h1 className={formTitleClass}>{props.title || ''}</h1>
        <TextInput
          data-cy='signup-firstName'
          error={formErrors.firstName.error}
          errorMessage={formErrors.firstName.message}
          label='First Name'
          name='First Name'
          onChange={handleSignUpFormChange('firstName')}
          required
          size='md'
          type='text'
          value={signUpFormValues.firstName}
          variant='outlined'
        />
        <TextInput
          data-cy='signup-lastName'
          error={formErrors.lastName.error}
          errorMessage={formErrors.lastName.message}
          label='Last Name'
          name='Last Name'
          onChange={handleSignUpFormChange('lastName')}
          required
          size='md'
          type='text'
          value={signUpFormValues.lastName}
          variant='outlined'
        />
        <TextInput
          data-cy='signup-email'
          error={formErrors.email.error}
          errorMessage={formErrors.email.message}
          label='Email'
          name='Email'
          onChange={handleSignUpFormChange('email')}
          required
          size='md'
          type='text'
          value={signUpFormValues.email}
          variant='outlined'
        />
        <TextInput
          data-cy='signup-password'
          error={formErrors.password.error}
          errorMessage={formErrors.password.message}
          label='Password'
          name='Password'
          onChange={handleSignUpFormChange('password')}
          required
          size='md'
          type='password'
          value={signUpFormValues.password}
          variant='outlined'
        />
        <TextInput
          data-cy='signup-confirmPassword'
          error={formErrors.confirmPassword.error}
          errorMessage={formErrors.confirmPassword.message}
          label='Confirm Password'
          name='Confirm Password'
          onChange={handleSignUpFormChange('confirmPassword')}
          required
          size='md'
          type='password'
          value={signUpFormValues.confirmPassword}
          variant='outlined'
        />
        <TextInput
          data-cy='signup-phoneNumber'
          error={formErrors.phoneNumber.error}
          errorMessage={formErrors.phoneNumber.message}
          label='Phone Number'
          name='Phone Number'
          onChange={handleSignUpFormChange('phoneNumber')}
          required
          size='md'
          type='text'
          value={signUpFormValues.phoneNumber}
          variant='outlined'
        />
        <Button variant='success' size='md' label='Sign Up' type='submit' />

        {formMessage.message && (
          <div className={formMessageClass} data-cy='signup-message'>
            {formMessage.message}
          </div>
        )}
      </form>
    </div>
  );
};

Signup.defaultProps = {
  title: '',
};
