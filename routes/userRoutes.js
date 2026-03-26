const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;