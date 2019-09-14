
exports.up = function(knex) {

    return knex.schema.createTable('teachers',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull()
        table.string('mobile').notNull()
        table.string('company_id').notNull()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('teachers')
};
