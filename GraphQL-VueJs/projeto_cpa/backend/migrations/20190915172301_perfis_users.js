
exports.up = function(knex) {
    return knex.schema.createTable('perfis_users', table=>{
        table.integer('user_id').unsigned()
        table.integer('perfil_id').unsigned()
        table.foreign('perfil_id').references('perfis.id')
        table.foreign('user_id').references('users.id')
        table.primary(['user_id','perfil_id'])
    }).then(function () {
        return knex('perfis_users').insert([
           {user_id:1,perfil_id:2},
           {user_id:1,perfil_id:3},
           {user_id:2,perfil_id:2},
           {user_id:3,perfil_id:1}
        ])
    })    
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfis_users')
};
