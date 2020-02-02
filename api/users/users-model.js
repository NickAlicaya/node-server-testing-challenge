const db = require('../../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findByDept,
  remove, 
  findDept
};

function find() {
  return db('usersDb').select('id', 'username', 'password','department','employed');
}

function findBy(filter) {
  return db('usersDb').where(filter);
}

function findByDept(filter) {
  return db("usersDb").where("usersDb.department", filter);
 // .select("id", "username", "department", "password");	  // .select("id", "username", "department");
}	


// function findBy(filter) {
//   return db("users").where({ filter });	  return db("users").where("users.department", filter);
//   // .select("id", "username", "department", "password");	  // .select("id", "username", "department");
// }	


async function add(user) {
  const [id] = await db('usersDb').insert(user);

  return findById(id);
}

function findById(id) {
  return db('usersDb')
    .where({ id })
    .first();
}

function remove(id) {
  return db('usersDb')
    .where('id', id)
    .del();
}

function findDept(department) {
  return db('usersDb').where('department',department);
}
