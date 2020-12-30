const edit = require('./edit');
const router = require('express').Router();
const readFile = require('../../models/multer')
// const validate= require('../../models/validator');

router.get('/', edit.getComponents);

router.post('/', readFile, edit.uploadComponents);

router.put('/component', edit.updateSingleComponent)


module.exports = router;