const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },


      type: {
        type: sequelize.INTEGER,
        
      },
      name: {
        type: Sequelize.INTEGER,
      },


      data:{
        type:Sequelize.BLOB('long')

      // complete: {
      //   type: Sequelize.BOOLEAN,
      //   defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
          as: 'userId',
        },
      },
    }),
  down: (queryInterface , Sequelize ) =>
    queryInterface.dropTable('Product'),
};
