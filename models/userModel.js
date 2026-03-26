
let users = [{ id: 1, name: "Jaswanth", email: "jas@gmail.com", age: 22 },
  { id: 2, name: "Rahul", email: "rahul@gmail.com", age: 25 }
];
let idCounter = 3;

const getAllUsers = async (search, sort, order) => {
  let result = [...users];

  if (search) {
    result = result.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort) {
    result.sort((a, b) => {
      if (order === "desc") {
        return a[sort] < b[sort] ? 1 : -1;
      }
      return a[sort] > b[sort] ? 1 : -1;
    });
  }

  return result;
};

const getUserById = async (id) => {
  return users.find(user => user.id == id);
};

const createUser = async ({ name, email, age }) => {
  const newUser = {
    id: idCounter++,
    name,
    email,
    age
  };

  users.push(newUser);

  return { lastID: newUser.id };
};

const updateUser = async (id, { name, email, age }) => {
  const user = users.find(u => u.id == id);

  if (!user) {
    return { changes: 0 };
  }

  // same logic as before
  user.name = name;
  user.email = email;
  user.age = age;

  return { changes: 1 };
};

const deleteUser = async (id) => {
  const index = users.findIndex(u => u.id == id);

  if (index === -1) {
    return { changes: 0 };
  }

  users.splice(index, 1);

  return { changes: 1 };
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};