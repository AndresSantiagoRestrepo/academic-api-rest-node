/**Packages */

const express= require("express");
const config = require("config");
const bodyParser=require("body-parser")
/** App Configuration  */

const app = express();
const port = config.get("server-port");
const jsonParser=bodyParser.json();
const urlEncodeParser=bodyParser.urlencoded({extended:true});

app.use(jsonParser);
app.use(urlEncodeParser);


const ipFn=require("./middleware/getIpAddress");
app.use("*",ipFn)

/**Methods */

app.get("/",(req,res,next)=>{
    res.send("Welcome xd")
});

//Student Routes Loading
const studentRoutes=require("./routes/student.routes");
studentRoutes(app)

//Teacher Route Loading
const teacherRoutes=require("./routes/teacher.routes");
teacherRoutes(app)

app.listen(port,()=>{
    console.log("Server is running...")
});
