
exports.up = function(knex) {
    return knex.schema.createTable('perfis_users', table=>{
        table.integer('user_id').unsigned()
        table.integer('perfil_id').unsigned()
        table.foreign('perfil_id').references('perfis.id')
        table.foreign('user_id').references('users.id')
        table.primary(['user_id','perfil_id'])
    })    
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfis_users')
};
