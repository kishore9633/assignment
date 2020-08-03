
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Cart.associate = (models) => {
    Cart.hasMany(models.Product, {
      foreignKey: 'cartId',
      as: 'product',
    });
  };
  return Cart;
};