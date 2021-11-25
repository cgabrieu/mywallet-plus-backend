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
