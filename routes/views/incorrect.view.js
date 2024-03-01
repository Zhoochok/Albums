const express = require('express');
const IncorrectPage = require('../../components/IncorrectPage');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.send(res.renderComponent(IncorrectPage));
  } catch ({ message }) {
    res.send(message);
  }
});

module.exports = router;