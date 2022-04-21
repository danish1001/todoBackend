const mongoose = require('mongoose');
const config = require('config');
const dbURI = config.get('mongoURI');
// const {MongoClient} = require('mongodb')

const connectDB = async () => {

    const db = null;

    try {
        await mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});
 
        // const client = new MongoClient(dbURI);

        // await client.connect();

        // const database = client.db("myFirstDatabase");
        
        // const db = database.collection('todoitems');

        
        // const movie = await movies.find({});

        // return movie;
        
        // movie.forEach(m =>console.log(m))

        

        

        console.log("monogdb connected")

    } catch (error) {

        console.log("mongo DB Crashed----------------------------------------------------------------")
        console.log(error.message);
        process.exit(1);

    }

    return db;

}

module.exports = connectDB

//     // "mongoURI": "mongodb+srv://danishrehman:Cherry%401001@cluster02.vnfk9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
