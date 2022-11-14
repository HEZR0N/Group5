var express = require('express');
var router = express.Router();

var knex = require('../knex');
function Order_items() {
  return knex('order_items');
}

router.get('/', (req, res) => {
  Order_items().select('*').then(order_items => {
    res.json(order_items);
  });
});

router.get('/:order_id', (req, res) => {
  Order_items().where({order_id: req.params.order_id}).then(order_items => {
    res.json(order_items);
  });
});

router.post('/', (req, res) => {
  Order_items().insert({ 
    item_id: req.body.item_id, 
    order_id: req.body.order_id,
    quantity: req.body.quantity
  })
  .returning('*')
  .then(order_item => {
    res.status(201).send(order_item);
  });
});

router.put('/:order_id/:item_id', (req, res) => {
  Order_items().where({order_id: req.body.order_id})
  .where({item_id: req.body.item_id}).update({ 
    // item_id: req.body.item_id, 
    // order_id: req.body.order_id,
    quantity: req.body.quantity
  })
  .where({id: req.params.id})
  .returning('*')
  .then(order_item => {
    Order_items().where({quantity: 0}).del()
    res.status(200).send(order_item);
  });
});

router.delete('/:order_id', (req, res) => {
  Order_items().where({id: req.params.order_id}).del()
  .then(result => {
    res.status(200).send(req.params.order_id);
  });
});


module.exports = router;