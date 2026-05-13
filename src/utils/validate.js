const validator = require("validator");

const signupValidation = (req) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return {
      valid: false,
      message: "First name, Last name, email, and password are required",
    };
  }

  if (!validator.isEmail(email)) {
    return { valid: false, message: "Invalid email format" };
  }

  if (!validator.isStrongPassword(password)) {
    return { valid: false, message: "Please enter a strong password" };
  }

  return { valid: true };
};

module.exports = { signupValidation };
