import TextField from '../TextField/TextField';
import './SignupForm.css';

export default function SignupForm() {
  return (
    <div className="SignupForm">
      <h1 className="SignupForm-title">Sign Up</h1>

      <form noValidate>
        <TextField name="email" value="e@f.com" label="Email*" error="Error" required />

        <TextField name="password" value="" label="Password*" type="password" required />

        <TextField
          name="confirmPassword"
          value=""
          label="Confirm Password*"
          type="password"
          required
        />

        <div className="SignupForm-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
