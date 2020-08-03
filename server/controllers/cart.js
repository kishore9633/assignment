const Cart = require("../models/index").Cart;


module.exports = {
  
  create(req, res) {
    return Cart
      .create({
        title: req.body.title,
      })
      .then((cart) => res.status(201).send(cart))
      .catch((error) => res.status(400).send(error));
  },


};
