
exports.up = function(knex) {
    return knex.schema.createTable('perfis',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('rotulo').notNull()
    }).then(function(){
        return knex('perfis').insert([
            {nome:'student', rotulo: 'Student'},
            {nome:'coordinator', rotulo: 'Coordinator'},
            {nome:'teacher', rotulo: 'Teacher'},
            {nome:'admin', rotulo: 'Admin'}
        ])
    })

  
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfis')
  
};
