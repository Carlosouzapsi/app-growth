const { UserModel } = require("../models");

class UserRepository {
  async createUser({ email, password }) {
    try {
      const user = new UserModel({
        email,
        password,
      });

      const userResult = await user.save();
      return userResult;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserRepository;
