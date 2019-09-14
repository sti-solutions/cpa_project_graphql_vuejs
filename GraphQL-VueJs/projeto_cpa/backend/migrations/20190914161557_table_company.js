
exports.up = function(knex) {
    return knex.schema.createTable('companys',table=>{
        table.increments('id').primary()
        table.string('name').notNull().unique()
        table.string('email').notNull()
        table.string('address').notNull()
        table.string('phone').notNull()
        table.string('mobile').notNull()
        table.string('company_type_id').notNull()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('companys')
  
};
