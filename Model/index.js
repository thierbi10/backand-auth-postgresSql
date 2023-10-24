//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is discover
// const sequelizes = new Sequelize(`postgres://postgres:postgres@localhost:5433/bd-auth`, {dialect: "postgres"})
// const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd-auth', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres', // Spécifiez le dialecte comme 'postgres' pour PostgreSQL
});

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to bd-auth`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)

//exporting the module
module.exports = db