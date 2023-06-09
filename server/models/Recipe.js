const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: 'This field is required'
    },
    description:{
        type: String,
        require: 'This field is required'
    },
    email:{
        type: String,
        require: 'This field is required'
    },
    ingredients:{
        type: Array,
        require: 'This field is required'
    },
    category:{
        type: String,
        enum: ['African', 'Spanish', 'American', 'Chinese', 'Mexican'],
        require: 'This field is required'
    },
    image: {
        type: String,
        require: 'This field is required'
    },
})

recipeSchema.index({name: 'text', description: 'text'})
// wirlCard Indexing
//recipeSchema.index({"$**": 'text'})

module.exports = mongoose.model('Recipe', recipeSchema)