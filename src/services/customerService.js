const CustomerSchema = require('../models/customerModel');
const { validateGeneral } = require('../utils/generalValidations');
const { generatePassword, checkPassword } = require('../utils/bcryptUtil');

class CustomerService {
  login(body) {
    this.email = body.email;
    this.password = body.password;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.email, 'The email is required');
        validateGeneral(this.password, 'The password is required');
        CustomerSchema.findOne({
          email: this.email,
        }).then(async (res) => {
          this.user = Object.create(res);
          if (!res) {
            throw new Error('Email no found');
          }
          const validatePassword = await checkPassword(
            this.password,
            res.password,
          );
          if (!validatePassword) {
            throw new Error('Password did not match');
          }
          this.user.password = null;
          resolve(this.user);
        })
          .catch((error) => reject(error));
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
        CustomerSchema.findOne({
          email: this.email,
        }).then(async (result) => {
          if (result) {
            throw new Error('Email exists');
          }
          generatePassword(this.password.toString())
            .then(async (hash) => {
              const data = {
                name: this.name,
                email: this.email,
                password: hash,
              };
              const userSchema = new CustomerSchema(data);
              const user = await userSchema.save();
              user.password = null;
              resolve(user);
            })
            .catch((error) => reject(error));
        })
          .catch((error) => reject(error));
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = {
  CustomerService,
};
