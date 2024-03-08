import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10d" });
  const decodedToken = jwt.decode(token);
  const maxAge = (decodedToken && decodedToken.exp * 1000) || 0; // Multiply by 1000 to convert seconds to milliseconds

  return { token, maxAge };
};
