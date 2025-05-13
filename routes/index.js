const express = require('express');
const router = express.Router();
const { client } = require('../config/db.js');

router.get('/', async function(req, res, next) {
  try {
    await client.connect();
    const db = client.db('petsData');
    const collection = db.collection('petsCollection');
    const pets = await collection.find().toArray();

    res.render('index', { pets: pets });
  } catch (err) {
    console.error('An error occurred:', err);
    res.status(500).send('Server Error');
  } finally {
    await client.close();
  }
});

module.exports = router;
