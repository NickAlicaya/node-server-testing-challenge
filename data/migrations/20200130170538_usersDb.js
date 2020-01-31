exports.up = function(knex) {
    return knex.schema.createTable('usersDb', users => {
      users.increments();
  
      users
        .string('username', 128)
        .notNullable()
        .unique();
      
      users.string('password', 128).notNullable();
      users.string('department', 100).notNullable();
      users.boolean('employed')
            .notNullable()
            .defaultTo(false);
            
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('usersDb');
  };
  