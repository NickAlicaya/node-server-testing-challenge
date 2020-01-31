const UsersDb = require('./users-model.js');
const db = require('../../data/dbConfig.js');

describe('users model', function() {
    
    
    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
    
    describe('add()', function() {
        beforeEach(async () => {
            await db('usersDb').truncate();
        })

        it('adds the new user to the db', async function() {
            // call insert passing a hobbit
            await UsersDb.add({username:'user3', password:'pass3',department:'sales', employed:'false'});
            await UsersDb.add({username:'user4', password:'pass4',department:'sales', employed:'false'});
            // open the db and see that the hobbit is there
            const usersDb = await db('usersDb');

            expect(usersDb).toHaveLength(2);
        })
        
        it('adds the new user to the db', async function() {
            // call insert passing a hobbit
            await UsersDb.add({username:'user3', password:'pass3',department:'sales', employed:'false'});
            await UsersDb.add({username:'user4', password:'pass4',department:'sales', employed:'false'});

            // open the db and see that the hobbit is there
            const usersDb = await db('usersDb');

            expect(usersDb).toHaveLength(2);
        })


    })

    describe('delete()', function() {
        beforeEach(async () => {
            await db('usersDb').truncate();
        })

        it('removes the users with specified id from the db', async function() {
            // check that the table is empty
            await UsersDb.find()
            const usersEmpty =await db('usersDb')
            expect(usersEmpty).toHaveLength(0);
            // add a user
            await UsersDb.add({username:'user1', password:'pass1',department:'sales', employed:'false'});
            await UsersDb.add({username:'user2', password:'pass2',department:'sales', employed:'false'});
            // check that the user is there
            const usersAdded =await db('usersDb')
            expect(usersAdded).toHaveLength(2);
            // delete the user
            await UsersDb.remove(1)
            // check that the user is gone 
            const users = await db('usersDb');
            expect(users).toHaveLength(1);
        })
    })

    describe('findById()', function() {
        beforeEach(async () => {
            await db('usersdB').truncate();
        })
        it('finds user by id', async function(){
            let usersDb = await db('usersDb');
            await UsersDb.add({username:'test1', password:'pass1',department:'advertising', employed:'false'});
            await UsersDb.add({username:'test2', password:'pass2',department:'advertising', employed:'false'});
            await UsersDb.add({username:'test3', password:'pass3',department:'advertising', employed:'false'});
            
             usersDb = await db('usersDb');
            
            expect(usersDb).toHaveLength(3);

             usersDb = await UsersDb.findById(3)
            expect(usersDb).toEqual({id:3,username:'test1', password:'pass1',department:'advertising', employed:'false'});
                })

    })
    
})

