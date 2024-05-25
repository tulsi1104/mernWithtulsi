require('dotenv').config(); //for env variables
const mongodb = require("mongoose");

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);

const database = async ()=>{
    try {
        await mongodb.connect(uri);
        console.log("Connected");
        // const adminDb = client.db().admin();
        // const databases = await adminDb.listDatabases();
        // console.log(databases);
        // Connect to a specific database
        // const dbName = "tulsi_mern"; 
        // // MongoClient.database(dbName);
        // client.db(dbName);
        // console.log(`Connected to database: ${dbName}`);


        //list out the databases
        // const adminDb = client.db().admin();
        // // console.log(adminDb);
        // const databases = await adminDb.listDatabases();
        // console.log("Databases:");
        // databases.databases.forEach(db => console.log(` - ${db.name}`));

        // const collections = await db.collections();
        // console.log("Collections:");
        // collections.collections.forEach(collection => console.log(` - ${collection}`));

    } catch (error) {
        console.error("Failed");
        process.exit(0);
    }
}

module.exports = database;