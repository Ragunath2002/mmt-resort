// routes/bookingRoutes.js
const express = require('express');
const { showbook, booking, deletebook } = require('../controller/bookingcontroller');

const router = express.Router();


router.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

router.route('/insertData').post(booking);

router.route('/show').get(showbook);

router.route('/delete/:id').delete(deletebook);



module.exports = router;
