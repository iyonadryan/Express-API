const AppDataSource = require("../config/data-source");

const getUsers = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository("User");
    const users = await repo.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository("User");
    const user = repo.create(req.body);
    const result = await repo.save(user);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository("User");
    const user = await repo.findOne({
      where: { id: Number(req.params.id) },
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository("User");
    await repo.update(req.params.id, req.body);
    const updated = await repo.findOne({ where: { id: req.params.id } });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const repo = AppDataSource.getRepository("User");
    await repo.delete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};