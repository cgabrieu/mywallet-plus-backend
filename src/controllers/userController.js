import * as userRepository from "../repositories/userRepository.js";
import * as userService from "../services/userService.js";

export async function signIn(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.sendStatus(400);

    const session = await userService.authenticate(email, password);

    if (session) {
      res.status(200).send(session.token);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.sendStatus(400);

    const hasUser = await userRepository.findByEmail(email);

    if (hasUser) return res.sendStatus(409);

    await userRepository.createUser(name, email, password);

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
