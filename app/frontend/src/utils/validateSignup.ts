import { Login } from "./types";
import validateLogin from "./validateLogin";

const vaidateSignup = (user: Login) => {
  const { username } = user;

  const isValid = validateLogin(user);

  if (!username) {
    alert('All fields must be filled');
    return false;
  }

  if (!isValid) {
    return isValid;
  }

  return true;
};

export default vaidateSignup;