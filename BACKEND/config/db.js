const mongoose = require('mongoose')
require("dotenv").config()

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL) 
        console.log(`MongoDB Connected ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Mongodb Server Issue ${error}`)

    }
      
}

module.exports = connectDB;