const { UserRepository } = require("../database");

class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  async Signup(userInputs) {
    const { email, password } = userInputs;

    const existentUser = await this.repository.createUser({ email, password });

    return existentUser;
  }
}

module.exports = UserService;
