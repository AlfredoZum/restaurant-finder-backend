const validateGeneral = (value, message) => {
  if (!value || value.length === 0) {
    throw new Error(message);
  }
};

module.exports = {
  validateGeneral,
};
