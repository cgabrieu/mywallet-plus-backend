import connection from "../database.js";

export async function findByEmail(email) {
  const user = await connection.query(
    `SELECT * FROM "users" WHERE "email" = $1`,
    [email]
  );
  return user.rows[0];
}
