
exports.up = function(knex) {
    return knex.schema.createTable('company_type',table=>{
        table.increments('id').primary()
        table.string('name').notNull().unique()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('company_type')
  
};
