var express = require('express');
var router = express.Router();

var knex = require('../knex');
function Users() {
  return knex('users');
}

router.get('/', (req, res) => {
  Users().select('*').then(users => {
    res.json(users);
  });
});

router.get('/:id', (req, res) => {
  Users().where({id: req.params.id}).then(user => {
    res.json(user);
  });
});

router.post('/', (req, res) => {
  Users().insert({ 
    name: req.body.name,
    email: req.body.email, 
    hash: req.body.hash, 
    isAdmin: req.body.isAdmin
  })
  .returning('*')
  .then(user => {
    res.status(201).send(user);
  });
});

router.put('/:id', (req, res) => {
  Users().update({ 
    name: req.body.name, 
    email: req.body.email,
    hash: req.body.hash, 
    isAdmin: req.body.isAdmin,
    apiToken: req.body.apiToken,
    promoCode: req.body.promoCode
  })
  .where({id: req.params.id})
  .returning('*')
  .then(user => {
    res.status(200).send(user);
  });
});

router.delete('/:id', (req, res) => {
  Users().where({id: req.params.id}).del()
  .then(result => {
    res.status(200).send(req.params.id);
  });
});


module.exports = router;