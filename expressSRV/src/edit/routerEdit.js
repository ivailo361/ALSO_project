const edit = require('./edit');
const router = require('express').Router();
const readFile = require('../../models/multer')
// const validate= require('../../models/validator');

router.get('/', edit.get);

router.post('/', readFile, edit.post);

router.put('/component', edit.put)

// router.post('/register', user.post.register);
// // router.post('/register', validate.registerInput('users'), user.post.register);

// router.post('/login', user.post.login);

// router.post('/logout', user.post.logout);

// router.put('/:id', user.put);

// router.delete('/:id', user.delete);

module.exports = router;