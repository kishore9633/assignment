app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const Sequelize = require(‘sequelize’);
// initialize an instance of Sequelize
const sequelize = new Sequelize({
  database: ‘users_db’,
  username: ‘newuser,
  password: ‘User@123’,
  dialect: ‘mysql’,
});
// check the databse connection
sequelize
  .authenticate()
  .then(() => console.log(‘Connection has been established successfully.’))
  .catch(err => console.error(‘Unable to connect to the database:’, err));
