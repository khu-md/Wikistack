const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define( 'pages',
  {
    title: {type: Sequelize.STRING, validate: {allowNull: false}},
    slug: {type: Sequelize.STRING, validate: {allowNull: false, notContains: " "}},
    content: {type: Sequelize.TEXT, allowNull: false},
    status: {type: Sequelize.ENUM('open', 'closed'), allowNull: false}
  }
);

const User = db.define( 'users',
  {
    name: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, validate: {allowNull: false, isEmail: true}}
  }
);

module.exports = {
  db, Page, User
}
