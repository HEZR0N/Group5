var express = require('express');
var router = express.Router();

var knex = require('../knex');
function Orders() {
  return knex('orders');
}

router.get('/', (req, res) => {
  Orders().select('*').then(orders => {
    res.json(orders);
  });
});

router.get('/:id', (req, res) => {
  Orders().where({id: req.params.id}).then(order => {
    res.json(order);
  });
});

router.post('/', (req, res) => {
  Orders().insert({ 
    order_number: req.body.order_number,
    total_price: req.body.total_price, 
    date: req.body.date, 
    user_id: req.body.user_id
  })
  .returning('*')
  .then(order => {
    res.status(201).send(order);
  });
});

router.put('/:id', (req, res) => {
  Orders().update({ 
    order_number: req.body.order_number,
    total_price: req.body.total_price, 
    date: req.body.date, 
    user_id: req.body.user_id
  })
  .where({id: req.params.id})
  .returning('*')
  .then(order => {
    res.status(200).send(order);
  });
});

router.delete('/:id', (req, res) => {
  Orders().where({id: req.params.id}).del()
  .then(result => {
    res.status(200).send(req.params.id);
  });
});


module.exports = router;