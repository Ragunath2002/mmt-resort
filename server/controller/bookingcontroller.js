
const { client } = require('../config/db');
const { ObjectId } = require('mongodb');

exports.booking =  async (req, res) => {
  const data = req.body;

  try {
    const db = client.db('mmtresort');
    const collection = db.collection('booking_detail');
    await collection.insertOne(data);
    res.send({ message: 'Data inserted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error inserting data' });
  }
}

exports.showbook = async (req, res) => {
    try {
      const db = client.db('mmtresort');
      const collection = db.collection('booking_detail');
      const data = await collection.find().toArray();
      res.send(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
exports.deletebook = async (req, res) => {
    const itemId = req.params.id;
    const object = new ObjectId(itemId);
  
    try {
      const db = client.db('mmtresort');
      const collection = db.collection('booking_detail');
      const result = await collection.deleteOne({ _id: object });
  
      if (result.deletedCount === 1) {
        res.send({ message: 'Data deleted successfully!' });
      } else {
        res.status(404).send({ message: 'Item not found' });
      }
    } catch (error) {
      console.error('Error deleting data:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }