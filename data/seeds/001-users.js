
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('usersDb').del()
    .then(function () {
      // Inserts seed entries
      return knex('usersDb').insert([
        {id: 1, username: 'user1',password: 'pass1' , department:'finance', employed: 'true'},
        {id: 2, username: 'user2',password: 'pass2' , department:'finance', employed: 'true'},
        {id: 3, username: 'user3',password: 'pass3' , department:'sales', employed: 'false'}
      ]);
    });
};

