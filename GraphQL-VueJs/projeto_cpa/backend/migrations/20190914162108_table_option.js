
exports.up = function(knex) {
    return knex.schema.createTable('options',table=>{
        table.increments('id').primary()
        table.string('description').notNull()
        table.integer('likert_scale_id').unsigned().references('likert_scale.id');
        table.timestamps(true,true)
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('options')
  
};
