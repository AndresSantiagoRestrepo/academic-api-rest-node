/**Packages */

const mongoose = require("mongoose");



/**
 *Schema Creation
 */
const departmentSchema= new mongoose.Schema({
    code:{
        type:"String",
        required: true
    },
    name:{
        type:"String",
        required: true
    },
    director:{
        type:"String",
        required: true
    },
    faculty:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coll_faculty",
        required: true
    }

}); 

/**Schema Exportation */
module.exports=departmentSchema;

