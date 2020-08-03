const TodoItem = require('../models').Product;

const Product = require("../models/index").Product;

module.exports = {
  create(req, res) {
    return Product
      .create({
        content: req.body.content,
        name:req.body.name,
        userId: req.body.userId,             //removed req.param.userID
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(400).send(error));
  },

};
