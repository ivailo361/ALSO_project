const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];
const bcrypt = require('bcrypt');
const { generateToken, decodeToken } = require('../../models/auth')


const MongoDB = require("../../models/mongo");
const db = new MongoDB();

module.exports = {
    get: async (req, res, next) => {
        console.log('I am here')
        let getData = await db.getData('servers')

        res.status(200).json(getData)

    },
    post: {
        register: async (req, res, next) => {
            try {
                console.log(req.body)
                // if (req.body) {
                //     throw new Error("it is a bug")
                // }
                const { email, password, image } = req.body;
                let salt = config.db_saltRounds
                let hashed = await bcrypt.hash(password, salt)
                let result = await db.insertUser('users', { email, password: hashed, image })
                console.log(result.insertedCount)
                if (result.insertedCount === 0) {
                    res.status(406).json('Not registered')
                }
                res.status(200).json(result)
            }
            catch (e) {
                next(e)
            }
        },
        login: async (req, res, next) => {
            try {
                
                console.log(req.body)
                const { email, password } = req.body;
                const user = await db.getDataAll('users', { email })
                if (user.length === 0) {
                    res.status(401).json('Invalid user')
                    return
                }
                const isMatched = await bcrypt.compare(password, user[0].password ? user[0].password : '')
                if (!isMatched) {
                    res.status(403).json('Invalid password')
                    return
                }
                const token = generateToken({ email }, { expiresIn: '200m' })

                const authorId = user[0]._id
                const authorEmail = user[0].email
                res.status(200).json({ authorId, authorEmail, token })
            }
            catch (e) {
                next(e)
            }
        },
    },
}