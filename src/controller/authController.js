const authService = require("../services/authService");

const authController = {
  register: async (req, res) => {
    try {
      const { email, username, password } = req.body;
      const user = await authService.register(email, username, password);

      res.json({ message: "User created", user });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const result = await authService.login(username, password);

      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

module.exports = authController;
