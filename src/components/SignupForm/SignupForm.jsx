import { useState } from 'react';
import TextField from '../TextField/TextField';
import './SignupForm.css';

const USERNAME = 'username';
const PASSWORD = 'password';
const CONFIRM_PASSWORD = 'confirmPassword';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    [USERNAME]: '',
    [PASSWORD]: '',
    [CONFIRM_PASSWORD]: '',
  });

  const [formErrors, setFormErrors] = useState({
    [USERNAME]: '',
    [PASSWORD]: '',
    [CONFIRM_PASSWORD]: '',
  });

  // Returns the errors object containing error messages for invalid fields,
  // or empty strings for valid ones
  const getUpdatedErrors = () => {
    const errors = { ...formErrors };

    Object.keys(formData).forEach(key => {
      errors[key] = formData[key] === '' ? 'Required' : '';
    });

    if (formData[PASSWORD] !== formData[CONFIRM_PASSWORD]) {
      errors[CONFIRM_PASSWORD] = 'Passwords do not match';
    }

    return errors;
  };

  // Returns true if there are no errors in the errors object
  const isValid = errors => {
    return Object.values(errors).every(error => error === '');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = getUpdatedErrors();
    setFormErrors(errors);

    if (isValid(errors)) console.log(formData);
  };

  return (
    <div className="SignupForm">
      <h1 className="SignupForm-title">Sign Up</h1>

      <form noValidate onSubmit={handleSubmit}>
        <TextField
          name={USERNAME}
          label="Username*"
          value={formData[USERNAME]}
          onChange={value => setFormData({ ...formData, [USERNAME]: value })}
          error={formErrors[USERNAME]}
          required
        />

        <TextField
          name={PASSWORD}
          label="Password*"
          type="password"
          value={formData[PASSWORD]}
          onChange={value => setFormData({ ...formData, [PASSWORD]: value })}
          error={formErrors[PASSWORD]}
          required
        />

        <TextField
          name={CONFIRM_PASSWORD}
          label="Confirm Password*"
          type="password"
          value={formData[CONFIRM_PASSWORD]}
          onChange={value => setFormData({ ...formData, [CONFIRM_PASSWORD]: value })}
          error={formErrors[CONFIRM_PASSWORD]}
          required
        />

        <div className="SignupForm-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
