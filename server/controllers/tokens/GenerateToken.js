// import jwt from "jsonwebtoken";

// export const generateToken = (id) => {
//   const expiresIn = 7 * 24 * 60 * 60;
//   const token = jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: expiresIn,
//   });
//   const decodedToken = jwt.decode(token);
//   const maxAge = (decodedToken && decodedToken.exp * 1000) || 0; // Multiply by 1000 to convert seconds to milliseconds

//   return { token, maxAge };
// };
