const { UserRepository } = require("../database");
const {
  GenerateSalt,
  GeneratePassword,
  GenerateSignature,
  FormateData,
  ValidatePassword,
} = require("../utils");

class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  async Signup(userInputs) {
    const { email, password } = userInputs;

    // Create Salt
    let salt = await GenerateSalt();

    let userPassword = await GeneratePassword(password, salt);

    const existentUser = await this.repository.CreateUser({
      email,
      password: userPassword,
      salt,
    });

    console.log(existentUser);

    const token = await GenerateSignature({
      email: email,
      _id: existentUser._id,
    });

    return FormateData({ id: existentUser._id, token });
  }

  async SignIn(userInputs) {
    const { email, password } = userInputs;

    try {
      const existingUser = await this.repository.FindUser({ email });
      console.log(existingUser.salt);
      if (existingUser) {
        const validPassword = await ValidatePassword(
          password,
          existingUser.password,
          existingUser.salt
        );
        if (validPassword) {
          const token = await GenerateSignature({
            email: existingUser.email,
            _id: existingUser._id,
          });
          return FormateData({ id: existingUser._id, token });
        }
      }
      return FormateData(null);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserService;
