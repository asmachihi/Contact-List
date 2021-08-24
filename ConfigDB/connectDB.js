const mongoose = require('mongoose')


// connexion à la base de données

const connectDB=async()=>{
    try {
       await mongoose.connect('mongodb://localhost:27017/firstdb',{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false})
        console.log("Connectée à la base de données")
    } catch (error) {
        console.log("impossible de se connecter à la base de données")
    }
}


module.exports = connectDB