import * as User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const { search, sort, order } = req.query;
    const users = await User.getAllUsers(search, sort, order);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const result = await User.createUser(req.body);
    res.status(201).json( "User inserted" );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const result = await User.updateUser(req.params.id, req.body);
    if (result.changes === 0)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const result = await User.deleteUser(req.params.id);
    if (result.changes === 0)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};