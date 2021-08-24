const mongoose = require('mongoose')

// Création d'un "Schema" qui contient les elements ainsi que le type de chaque données dans la base de données
const personSchema = mongoose.Schema({
    name:{ type:String , required:true },
    prenom:{ type:String },
    age: {type:Number, max:60},
    email:{type:String, unique:true}  
})

module.exports = mongoose.model('Person',personSchema)