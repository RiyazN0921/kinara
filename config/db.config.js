const mongoose=require('mongoose');
const db_url='mongodb+srv://riyazn886:ymdFLG8TrOlOYtD0@riyaz.aatdsty.mongodb.net/'

const db_connection = async ()=>{
    await mongoose.connect(db_url);
    console.log("database connection established")
}

module.exports = db_connection;