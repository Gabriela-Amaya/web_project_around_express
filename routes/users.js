const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const usersPath = path.join(__dirname, '../data/users.json');

// GET /users - Obtener todos los usuarios
router.get('/', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({
        message: 'Error al leer los usuarios',
      });
      return;
    }

    try {
      const users = JSON.parse(data);
      res.json(users);
    } catch (error) {
      res.status(500).json({
        message: 'Error al procesar los usuarios',
      });
    }
  });
});

// GET /users/:id - Obtener un usuario por su ID
router.get('/:id', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({
        message: 'An error has occurred on the server',
      });
      return;
    }

    try {
      const users = JSON.parse(data);
      const user = users.find((item) => item._id === req.params.id);

      if (!user) {
        res.status(404).json({
          message: 'User ID not found',
        });
        return;
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: 'An error has occurred on the server',
      });
    }
  });
});

module.exports = router;
