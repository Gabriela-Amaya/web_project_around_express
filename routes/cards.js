const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const cardsPath = path.join(__dirname, '../data/cards.json');

router.get('/', (req, res) => {
  fs.readFile(cardsPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({
        message: 'Error al leer las tarjetas',
      });
      return;
    }

    try {
      const cards = JSON.parse(data);
      res.json(cards);
    } catch (error) {
      res.status(500).json({
        message: 'Error al procesar las tarjetas',
      });
    }
  });
});

module.exports = router;
