const bcrypt = require('bcrypt');

const generatePassword = (password) => new Promise((resolve, reject) => {
  bcrypt.genSalt(10, (salterror, salt) => {
    if (salterror) {
      reject(salterror);
      return;
    }
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(hash);
    });
  });
});

const checkPassword = (password, passwordDb) => new Promise((resolve) => {
  const checkPass = bcrypt.compareSync(
    password.toString(),
    passwordDb,
  );
  if (!checkPass) {
    resolve(false);
    // throw new Error('Password did not match');
  }
  resolve(true);
});

module.exports = {
  generatePassword,
  checkPassword,
};
