// require('dotenv').config();

// const express = require('express');
// const mongoose = require('mongoose')
// var cors = require('cors')
// const bodyParser = require('body-parser');
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const port = process.env.PORT;

// const { client, connectDB } = require('./config/db');

// connectDB();


// app.post('/insertData', (req, res) => {
//   const data = req.body; // Access data from request body
//   console.log(data, "data");


//   async function run() {
//     try {
//       await client.connect();
//       const db = client.db('mmtresort');
//       const collection = db.collection('booking_detail');

//       // const data = await collection.find();
//       // const data  = {...formdata,sno:data_length.length + 1.}

//       await collection.insertOne(data);
//       res.send({ message: 'Data inserted successfully2!' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ message: 'Error inserting data' });
//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.error);
// });




// app.get('/api/data', (req, res) => {
//   const data1 = { message: 'Hello from Node.js!' }
//   res.json(data1);
// });



// app.get('/show', async (req, res) => {
//   try {
//     await client.connect();

//     const db = client.db('mmtresort');
//     const collection = db.collection('booking_detail');

//     const data = await collection.find().toArray();

//     await client.close();

//     console.log(data);

//     res.send(data);//above

//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
//   // await client.close();
// });



// app.delete('/delete/:id', async (req, res) => {

//   const itemId = req.params.id;
//   const objectId = new ObjectId(itemId); 
//   console.log("itemId", itemId)

//   try {

//     await client.connect();

//     const db = client.db('mmtresort');
//     const collection = db.collection('booking_detail');

//     const result = await collection.deleteOne({ _id: objectId });
//     res.send({ message: 'Data deleted successfully2!' });

//     if (result.deletedCount === 1) {
//       console.log(` deleted successfully.`);
//     } else {
//       console.log(`${itemId} not found.`);
//     }
//   }
//   catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
//   finally {
//     await client.close();
//   }
// });

// app.listen(port, () => console.log(`Server listening on port ${port}`));














// app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');
const bookingRoutes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT;

connectDB();

app.use('/', bookingRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
