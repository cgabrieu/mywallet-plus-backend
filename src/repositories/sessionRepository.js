import connection from "../database.js";

async function create(user, token) {
  const result = await connection.query(
    `
      INSERT INTO sessions
      (token, "userId")
      VALUES ($1, $2)
      RETURNING *
    `,
    [token, user.id]
  );

  return result.rows[0];
}

export { create };
