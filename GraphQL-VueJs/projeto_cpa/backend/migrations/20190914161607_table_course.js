
exports.up = function(knex) {
    return knex.schema.createTable('courses', table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.integer('company_id').unsigned().references('companys.id');
        table.string('periods_id').notNull()
        table.string('evaluations_id').notNull()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('courses')
  
};
