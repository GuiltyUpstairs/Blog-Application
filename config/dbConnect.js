const mongoose = require('mongoose');

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Successfully connected to the database")
    } catch (error){
        console.log("Error connecting to the database : ", error.message)
    }
}

dbConnect();
