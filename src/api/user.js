const UserService = require("../services/user-service");

module.exports = (app) => {
  const service = new UserService();

  app.post("/user/signup", async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const { data } = await service.Signup({ email, password });

      return res.json(data);
    } catch (error) {
      next(error);
    }
  });

  app.post("/user/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const { data } = await service.SignIn({ email, password });
      return res.json(data);
    } catch (error) {
      next(error);
    }
  });
};
