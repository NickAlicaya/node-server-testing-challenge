const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../../auth/restricted-middleware.js');


//GET requests to /api/users returns list of all users
router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});


//GET requests to /api/users returns list of all users of specified dept
router.get('/department', restricted, (req, res) => {
  // console.log(req.user)
  Users.findByDept(req.body.department)

    .then(users => {
      // console.log(req.params.department,'req/res/dept');
      res.json(users);
    })
    .catch(err => res.send(err));
});

 //Delete user with specified id  /api/users/id

 router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Users.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: `Could not find user with id = ${id}` });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete user' });
  });
});

// router.get("/logout", (req, res) => {
//     if (req.session) {
//         req.session.destroy(err => {
//             if (err) {
//                 res.status(500).json({
//                     you:
//                         "can checkout any time you like, but you can never leave!",
//                 });
//             } else {
//                 res.status(200).json({ bye: "thanks for playing" });
//             }
//         });
//     } else {
//         res.status(204);
//     }
// });


module.exports = router;
