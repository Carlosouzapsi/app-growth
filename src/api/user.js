const UserService = require("../services/user-service");

module.exports = (app) => {
  const userService = new UserService();

  app.post("/user/signup", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      return res.json(email, password);
    } catch (error) {
      next(error);
    }
  });
};
