
exports.up = function(knex) {
    return knex.schema.createTable('companys',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull()
        table.string('address').notNull()
        table.string('phone').notNull()
        table.string('mobile').notNull()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('companys')
  
};
