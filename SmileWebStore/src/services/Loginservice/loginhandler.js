import { validateEmail,validatePassword } from "./validator";

export function handleLoginSubmit(email, password, setError, onSuccess) {
  if (!validateEmail(email)) {
    setError('Invalid email');
    console.log("Error");
    return;
  }
  if (!validatePassword(password)) {
    setError('Password must be at least 7 characters long');
    console.log("Error");
    return;
  }
  setError('');
  onSuccess(); 
}
