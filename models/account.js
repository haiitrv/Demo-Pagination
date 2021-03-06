const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Tutorial', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Schema = mongoose.Schema

const AccountSchema = new Schema({
    username: String,
    password: String,
    role: String
}, {
    collection: 'account'
})

const AccountModel = mongoose.model('account', AccountSchema)

module.exports = AccountModel