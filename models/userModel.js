import { db } from "../db.js";

export const getAllUsers = async (search, sort, order) => {
  let query = "SELECT * FROM users WHERE 1=1";

  if (search) {
    query += ` AND name LIKE '%${search}%'`;
  }

  if (sort) {
    query += ` ORDER BY ${sort} ${order || "ASC"}`;
  }

  return await db.all(query);
};

export const getUserById = async (id) => {
  return await db.get("SELECT * FROM users WHERE id = ?", [id]);
};

export const createUser = async (user) => {
  const { name, email, age } = user;
  return await db.run(
    "INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
    [name, email, age]
  );
};

export const updateUser = async (id, user) => {
  const { name, email, age } = user;
  return await db.run(
    "UPDATE users SET name=?, email=?, age=? WHERE id=?",
    [name, email, age, id]
  );
};

export const deleteUser = async (id) => {
  return await db.run("DELETE FROM users WHERE id=?", [id]);
};