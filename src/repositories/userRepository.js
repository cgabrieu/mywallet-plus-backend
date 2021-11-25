import connection from "../database.js";
import bcrypt from "bcrypt";

export async function findByEmail(email) {
  const user = await connection.query(
    `SELECT * FROM "users" WHERE "email" = $1`,
    [email]
  );
  return user.rows[0];
}

export async function createUser(name, email, password) {
  const hashedPassword = bcrypt.hashSync(password, 10);

  await connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
  );
}
