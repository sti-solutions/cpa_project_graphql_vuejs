
exports.up = function(knex) {
    return knex.schema.createTable('perfis',table=>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('rotulo').notNull()
        table.timestamps(true,true)
    }).then(function(){
        return knex('perfis').insert([
            {name:'student', rotulo: 'Student'},
            {name:'coordinator', rotulo: 'Coordinator'},
            {name:'teacher', rotulo: 'Teacher'},
            {name:'admin', rotulo: 'Admin'}
        ])
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfis')
  
};
