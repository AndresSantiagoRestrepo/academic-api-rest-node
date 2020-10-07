/**Packages  */

const mongoose = require("mongoose");
const config =require("config");

const mongodbInfo = config.get("db-connections.mongodb");

const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;


module.exports = () =>{

    mongoose.connect(connStr);
    mongoose.connection.on("connected", ()=>{
        console.log("MongoDB server connected !");
    });

    mongoose.connection.on("disconnected",()=>{
        console.log("MongoDB server Disconnected !");
    });

    mongoose.connection.on("error",()=>{
        console.log("MongoDB server Connection Error !");
    })

    mongoose.connection.on("SIGINT",()=>{
        mongoose.connection.close(()=>{
            console.log("MongoDB server Shutting down !");
        });
        
    })

};


