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


//User Route Loading
const userRoutes=require("./routes/period.routes");
userRoutes(app)

//Token Middleware
//tkFn=require("./middleware/verifyToken")
//app.use(tkFn)

//Student Routes Loading
const studentRoutes=require("./routes/student.routes");
studentRoutes(app)

//Teacher Route Loading
const teacherRoutes=require("./routes/teacher.routes");
teacherRoutes(app)

//Period Route Loading
const periodRoutes=require("./routes/period.routes");
periodRoutes(app)



//Course Route Loading
const courseRoutes=require("./routes/user.routes"); 
courseRoutes(app)


//Faculty Route Loading
const facultyRoutes=require("./routes/faculty.routes"); 
facultyRoutes(app)


//Department Route Loading
const departmentRoutes=require("./routes/department.routes"); 
departmentRoutes(app)


app.listen(port,()=>{
    console.log("Server is running...")
});
