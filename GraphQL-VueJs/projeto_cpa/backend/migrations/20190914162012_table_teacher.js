
exports.up = function(knex) {

    return knex.schema.createTable('teachers',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull()
        table.string('mobile').notNull()
        table.integer('company_id').unsigned().references('companys.id');
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('teachers')
};
