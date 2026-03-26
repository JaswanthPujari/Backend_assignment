const { db } = require("../db");

const getAllUsers = async (search, sort, order) => {
  let query = "SELECT * FROM users WHERE 1=1";

  if (search) {
    query += ` AND name LIKE '%${search}%'`;
  }

  if (sort) {
    query += ` ORDER BY ${sort} ${order || "ASC"}`;
  }

  return await db.all(query);
};

const getUserById = async (id) => {
  return await db.get("SELECT * FROM users WHERE id = ?", [id]);
};

const createUser = async ({ name, email, age }) => {
  return await db.run(
    "INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
    [name, email, age]
  );
};

const updateUser = async (id, { name, email, age }) => {
  return await db.run(
    "UPDATE users SET name=?, email=?, age=? WHERE id=?",
    [name, email, age, id]
  );
};

const deleteUser = async (id) => {
  return await db.run("DELETE FROM users WHERE id=?", [id]);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};