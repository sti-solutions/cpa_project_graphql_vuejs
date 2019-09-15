
exports.up = function(knex) {
    return knex.schema.createTable('courses', table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.integer('companys_id').unsigned().references('companys.id');
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('courses')
  
};
