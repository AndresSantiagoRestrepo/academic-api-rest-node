/**Packages */

const mongoose = require("mongoose");


/**
 *Schema Creation
 */
const facultySchema= new mongoose.Schema({
    code:{
        type:"String",
        required: true
    },
    name:{
        type:"String",
        required: true
    },
    decano:{
        type:"String",
        required: true
    }

}); 

/**Schema Exportation */
module.exports=facultySchema;

