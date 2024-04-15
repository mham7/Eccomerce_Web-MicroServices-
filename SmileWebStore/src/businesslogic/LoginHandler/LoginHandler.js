export const validateLoginForm = (email, password) => {
    if (!email || !password) {
      return 'Please fill in all fields.';
    }
    return null; // Return null if form is valid
  };