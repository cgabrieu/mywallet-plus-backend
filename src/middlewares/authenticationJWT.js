import jwt from "jsonwebtoken";

export default async function authenticationJWT(req, res, next) {
  const authorization = req.headers.authorization || "";
  const token = authorization.split("Bearer ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(401);
    req.userId = decoded.id;
    next();
  });
}
