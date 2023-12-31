if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
//important libraries
const express = require("express")
const app = express()

const passport = require("passport")

const flash = require("express-flash")
const session = require("express-session")
const methodOverride = require("method-override")
const SessionRoutes = require("./routes/session.routes");
const DashboardRoutes = require("./routes/dashboard.routes");
const SectionRoutes = require("./routes/section.routes.js");

app.use(express.urlencoded({ extended: false }));
app.use(flash())
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave: false, //resave the session variable 
  saveUninitialized: false //don't save an empty value in the session if there is no value
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride("_method"))
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'))
//configuring the login functionality
app.use(SessionRoutes);
app.use(DashboardRoutes);
app.use('/section',SectionRoutes);

app.listen(process.env.PORT,()=>{
  console.log("server is running in http://localhost:",process.env.PORT);
})
