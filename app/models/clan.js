// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var clanSchema = new Schema({
    tag: { type: String, required: true, unique: true },
    name: String,
    // password: { type: String, required: true },
    // admin: Boolean,
    // location: String,
    // meta: {
    //     age: Number,
    //     website: String
    // },
    // created_at: Date,
    // updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Clan = mongoose.model('Clan', clanSchema);

// make this available to our clans in our Node applications
module.exports = Clan;