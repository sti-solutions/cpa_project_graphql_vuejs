
exports.up = function(knex) {
    return knex.schema.createTable('answers',table=>{
        table.increments('id').primary()
        table.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('answers')
  
};
