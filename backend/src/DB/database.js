if (process.env.NODE_ENV !== 'PRODUCTION'){
require("dotenv").config({
    path: '../config/.env',
});
}
const mongoose=require('mongoose');
const connectDatabase = ()=>{
    console.log(process)
    mongoose.connect(process.env.DB_URL)
    .then((data)=> {
        console.log(`Databse is connected succesfully : ${data.connection.host}`)
    })
    .catch((er)=> console.log('Database connection failed...', er.message))

}
 module.exports=connectDatabase
