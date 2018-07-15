import * as express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();

// Connect
const connection = (closure: Function) => {
  return MongoClient.connect('mongodb://mean-stack-database/mean', (err, db) => {
    if (err) {
      return console.log(err);
    }

    closure(db);
  });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err === 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
const response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/users', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((users) => {
        response.data = users;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

router.get('/test', (req, res) => {
  res.json(response);
});

module.exports = router;
