import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userRepository from "../repositories/userRepository.js";
import * as sessionRepository from "../repositories/sessionRepository.js";

export async function authenticate(email, password) {
  const user = await userRepository.findByEmail(email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return null;
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  const session = await sessionRepository.create(user, token);

  return session;
}
