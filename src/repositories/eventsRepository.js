import connection from "../database.js";

export async function createFinancialEvent(userId, value, type) {
  await connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [userId, value, type]
  );
}

export async function getFinancialEvents(userId) {
  const events = await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId" = $1 ORDER BY "id" DESC`,
    [userId]
  );

  return events.rows;
}
