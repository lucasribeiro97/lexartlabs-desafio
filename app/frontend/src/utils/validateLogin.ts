import { Login } from "./types";

const validateLogin = (user: Login) => {
  const { email, password } = user;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !password) {
    window.alert('All fields must be filled');
    return false;
  }

  if (!regexEmail.test(email) || password.length < 6) {
    window.alert('Invalid email or password');
    return false;
  }

  return true;
};

export default validateLogin;