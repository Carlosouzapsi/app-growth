const { UserModel } = require("../models");

class UserRepository {
  async CreateUser({ email, password, salt }) {
    try {
      const user = new UserModel({
        email,
        password,
        salt,
      });

      const userResult = await user.save();
      return userResult;
    } catch (error) {
      throw new Error(error);
    }
  }

  async FindUser({ email }) {
    try {
      const existentUser = await UserModel.findOne({ email: email });
      return existentUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserRepository;
