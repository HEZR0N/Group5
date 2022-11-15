var express = require('express');
var router = express.Router();

var knex = require('../knex');
function Promo_codes() {
  return knex('promo_codes');
}

router.get('/', (req, res) => {
  Promo_codes().select('*').then(promo_codes => {
    res.json(promo_codes);
  });
});

router.get('/:code', (req, res) => {
  Promo_codes().where({code: req.params.code}).then(promo_code => {
    res.json(promo_code);
  });
});

router.post('/', (req, res) => {
  Promo_codes().insert({ 
    code: req.body.code
  })
  .returning('*')
  .then(promo_code => {
    res.status(201).send(promo_code);
  });
});

router.put('/:code', (req, res) => {
  Promo_codes().update({ 
    code: req.body.code
  })
  .where({code: req.params.code})
  .returning('*')
  .then(promo_code => {
    res.status(200).send(promo_code);
  });
});

router.delete('/:code', (req, res) => {
  Promo_codes().where({code: req.params.code}).del()
  .then(result => {
    res.status(200).send(req.params.code);
  });
});


module.exports = router;