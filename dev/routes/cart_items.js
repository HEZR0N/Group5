var express = require('express');
var router = express.Router();

var knex = require('../knex');
function Cart_items() {
  return knex('cart_items');
}

router.get('/', (req, res) => {
  Cart_items().select('*').then(cart_items => {
    res.json(cart_items);
  });
});

router.get('/:user_id', (req, res) => {
  Cart_items().where({user_id: req.params.user_id}).then(cart_items => {
    res.json(cart_items);
  });
});

router.post('/', (req, res) => {
  Cart_items().insert({ 
    item_id: req.body.item_id, 
    user_id: req.body.user_id,
    quantity: req.body.quantity
  })
  .returning('*')
  .then(cart_item => {
    res.status(201).send(cart_item);
  });
});

router.put('/:user_id/:item_id', (req, res) => {
  Cart_items().where({user_id: req.body.user_id})
  .where({item_id: req.body.item_id}).update({ 
    // item_id: req.body.item_id, 
    // user_id: req.body.user_id,
    quantity: req.body.quantity
  })
  .where({user_id: req.body.user_id})
  .where({item_id: req.body.item_id})
  .returning('*')
  .then(cart_item => {
    Cart_items().where({quantity: 0}).del()
    res.status(200).send(cart_item);
  });
});

router.delete('/:user_id', (req, res) => {
  Cart_items().where({user_id: req.params.user_id}).del()
  .then(result => {
    res.status(200).send(req.params.user_id);
  });
});


module.exports = router;