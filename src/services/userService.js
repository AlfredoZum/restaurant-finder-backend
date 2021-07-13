const UserSchema = require('../models/userModel');
const { validateGeneral } = require('../utils/generalValidations');
const { generatePassword, checkPassword } = require('../utils/bcryptUtil');

class UserService {
  login(body) {
    this.email = body.email;
    this.password = body.password;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.email, 'The email is required');
        validateGeneral(this.password, 'The password is required');
        UserSchema.findOne({
          email: this.email,
        }).then(async (res) => {
          this.user = Object.create(res);
          if (!res) {
            reject(Error('Email no found'));
          }
          const validatePassword = await checkPassword(
            this.password,
            res.password,
          );
          if (!validatePassword) {
            reject(Error('Password did not match'));
          }
          this.user.password = null;
          resolve(res);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  create(body) {
    this.name = body.name;
    this.email = body.email;
    this.password = body.password;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.name, 'The name is required');
        validateGeneral(this.email, 'The email is required');
        validateGeneral(this.password, 'The password is required');
        UserSchema.findOne({
          email: this.email,
        }).then(async (result) => {
          if (result) {
            reject(Error('Email exists'));
          }
          generatePassword(this.password.toString())
            .then(async (hash) => {
              const data = {
                name: this.name,
                email: this.email,
                password: hash,
              };
              const userSchema = new UserSchema(data);
              const user = await userSchema.save();
              resolve(user);
            })
            .catch((error) => reject(error));
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = {
  UserService,
};
