const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

async function connectDB() {
  try {
    await client.connect();
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
}

module.exports = { client, connectDB };
