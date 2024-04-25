import { validateEmail,validatePassword,matchPassword } from "../Loginservice/validator";

export function handleRegisterSubmit(firstname,lastname,email, password,confirmpassword, setError, onSuccess) {
    if (!firstname) {
        setError('First Name cannot be empty');
        return;
      }
      
      if (!lastname) {
        setError('Last Name cannot be empty');
        return;
      }
      
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
  if(!matchPassword(password,confirmpassword)){
    setError('Passwords dont match');
    return;
  }
  setError('');
  onSuccess(); 
}
