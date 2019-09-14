// Update with your config settings.

module.exports = {

  client: 'mysql',
  connection: {
    database: 'cpa_project',
    user:     'root',
    password: 'admin'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
