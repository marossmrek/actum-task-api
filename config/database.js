const objection = require('objection');
const Knex = require('knex');

const Model = objection.Model;

//without secret for db, just for the very simple purpose
console.log(process.env)
const knex = Knex({
    client: 'pg',
    connection: process.env.DATABASE_URL
});

Model.knex(knex);

module.exports.Model = Model;
