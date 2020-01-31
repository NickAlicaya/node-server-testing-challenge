// const Users = require('./users-model.js');
// const db = require('../../data/dbConfig.js');

// describe('test environment', function() {
//     it('should use the testing environment',  function() {
//         //checks the environment to be set to testing environment
//         expect(process.env.DB_ENV).toBe('testing');
//     })
// })

// describe('users model', function() {
//     beforeEach(async () => {
//         await db('usersDb').truncate();
//     })
//     describe('add()', function() {
//         it('adds the new user to db', async function() {
//             //call insert passing a user
//             await Users.add({ username: 'sam'});
            
//             //opens the db and see the hobbit is there
//             const usersDb = await db('usersDb');
//             expect(usersDb).toHaveLength(1);
//         })
//     })


    
// })


const UsersDb = require('./users-model.js');
const db = require('../../data/dbConfig.js');

describe('users model', function() {
    
    
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
    
    // describe('add()', function() {
    //     beforeEach(async () => {
    //         await db('usersDb').truncate();
    //     })

    //     it('adds the new hobbit to the db', async function() {
    //         // call insert passing a hobbit
    //         await UsersDb.add({ username: 'sam' });
    //         await UsersDb.add({ username: 'frodo' });

    //         // open the db and see that the hobbit is there
    //         const usersDb = await db('usersDb');

    //         expect(usersDb).toHaveLength(2);
    //     })
        
    //     it('adds the new user to the db', async function() {
    //         // call insert passing a hobbit
    //         await UsersDb.add({ username: 'sam' });
    //         await UsersDb.add({ username: 'frodo' });

    //         // open the db and see that the hobbit is there
    //         const hobbits = await db('usersDb');

    //         expect(UsersDb).toHaveLength(2);
    //     })


    // })
    describe('delete()', function() {
        beforeEach(async () => {
            await db('usersDb').truncate();
        })

        it('removes the users from the db', async function() {
            // check that the table is empty

            // add a hobbit

            // check that the hobbit is there

            // delete the hobbit

            // check that the hobbit is gone 
        
        })


    })
    
})

