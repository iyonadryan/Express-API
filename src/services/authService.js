const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppDataSource = require("../config/data-source");
const { User } = require("../entity/User");

const SECRET_KEY = process.env.SECRET_KEY;

const authService = {
  register: async (email, username, password) => {
    const userRepo = AppDataSource.getRepository(User);

    const emailExisting =  await userRepo.findOne({ where: { email: email } });
    if (emailExisting) {
      throw new Error("Email already exists");
    }
    
    const usernameExisting = await  await userRepo.findOne({ where: { username: username } });
    if (usernameExisting) {
      throw new Error("Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userRepo.create({
      email : email,
      password: hashedPassword,
      username : username,
      firstname : "",
      lastname : ""
    });

    
    return await userRepo.save(newUser);
  },

  login: async (email, password) => {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({ where: { email: email } });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid password");

    const token = jwt.sign(
    {
      id: user.id,
      username: user.username, 
      role: "user"           // Default value
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

    return { token };
  }
};

module.exports = authService;
