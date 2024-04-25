// Function to validate email using a regular expression
export function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password length
export function validatePassword(password) {
    return password.length > 6;
}

export function matchPassword(password, reconfirmpassword){
    return password==reconfirmpassword
}
