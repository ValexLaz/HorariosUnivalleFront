if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

//important libraries
const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const passport = require("passport")
const initializePassport = require("./passport-config")
const flash = require("express-flash")
const session = require("express-session")

initializePassport(passport, email => users.find(user => user.email === email))
const users = []

app.use(express.urlencoded({ extended: false }));
app.use(flash())
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave: false, //resave the session variable 
  saveUninitialized: false //don't save an empty value in the session if there is no value
}))
app.use(passport.initialize())
app.use(passport.session())
//configuring the login functionality
app.post('/login',passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/login',
    failureFlash: true
}))



//configuring the register functionality
app.post('/register', async (req, res) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    console.log(users); 
    res.redirect('/login')
  } catch (e) {
    console.log(e);
    res.redirect('/register')
  }
})


app.set('view engine', 'ejs');

//routes

app.get('/index', (req, res) => {
    // Supongamos que "name" es una variable que contiene un nombre
    const name = 'Ejemplo de Nombre';
    res.render('index', { name });
  });
  

app.get('/login', (req, res) => {
    // Supongamos que messages es un objeto que contiene un campo error
    const messages = { error: 'Mensaje de error aquí' };
    res.render('login', { messages });
  });
  

// Tu código de servidor Node.js
app.get('/register', (req, res) => {
    // Supongamos que "messages" es un objeto que contiene un campo "error"
    const messages = { error: 'Mensaje de error aquí' };
    res.render('register', { messages });
  });
  

app.listen(3000)
//end routes