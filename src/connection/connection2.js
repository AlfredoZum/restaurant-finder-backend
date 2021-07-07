const { MongoClient } = require('mongodb');

// db name
const dbName = 'restaurant_db';

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url, {
  useUnifiedTopology: true,
});

module.exports = async () => {
  // Conectamos al servidor
  await client.connect();

  return client.db(dbName);
};
