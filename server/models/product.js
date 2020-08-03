//const user = require("./user");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define('Product', {

     content:{
       type:Sequelize.STRING
     },

    type:{
    type:Sequelize.STRING
},
   
    name:{

    type:Sequelize.STRING
},
    data:{
    
    type:Sequelize.BLOB('long')
}
    
//    content: {
//      type: DataTypes.STRING,
//      allowNull: false,
//    },
//
//    commentMe: {
//      type: DataTypes.INTEGER,           //chekcing for extra column in db table (https://sequelize.org/master/manual/model-basics.html#data-types  column opt)
//      
//    },
//    
//    complete: {
//      type: DataTypes.BOOLEAN,
//      defaultValue: false,
//    }
  });
  Product.associate = (models) => {
    Product.belongsTo(models.User, {
      foreignKey: 'userId',
      
      onDelete: 'CASCADE',
    });
  };
  return Product;
};
