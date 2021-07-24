const validateGeneral = (value, message) => {
  if (!value || value.length === 0) {
    throw new Error(message);
  }
};

// add option fields to main data
const addFieldIfExist = (value, key, data) => {
  const dataTemp = data;
  if (value) {
    dataTemp[key] = value;
  }
  return dataTemp;
};

module.exports = {
  validateGeneral,
  addFieldIfExist,
};
