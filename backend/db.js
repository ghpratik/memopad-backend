const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/inotebook";/
const mongoURI = "mongodb+srv://pratikgaikwad:Pratik2000@cluster0.48lsq0q.mongodb.net/iNotebook";
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("connected to MongoDB successfully"))
    .catch((error)=> console.log("MongoDB connection failed: ", error.message))
    // console.log("connected to mongo successfully");
}
// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("connected to Mongo Successfully");
//     })
// }

module.exports = connectToMongo;