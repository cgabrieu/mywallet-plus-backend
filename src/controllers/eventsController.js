import * as userRepository from "../repositories/userRepository.js";
import * as userService from "../services/userService.js";

export async function financialEvents(req, res) {
  try {
    const authorization = req.headers.authorization || "";
    const token = authorization.split("Bearer ")[1];

    if (!token) return res.sendStatus(401);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
