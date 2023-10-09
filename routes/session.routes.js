const router = require("express").Router();
const bcrypt = require("bcrypt")
const passport = require("passport")
const initializePassport  = require("../passport-config");
initializePassport(passport, email => users.find(user => user.email === email),
id => users.find(user => user.id === id) 
)

const users = []

router.post('/register',checkNotAuthenticated, async (req, res) => {
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
});

router.get('/index', checkAuthenticated, (req, res) => {
    res.render("index.ejs", {name: req.user.name})
})
  
router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render("login.ejs")
})
  
router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render("register.ejs")
})
    
router.delete("/logout", (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err)
      res.redirect("/login")
    })
});

router.post('/login',checkNotAuthenticated,passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/login',
    failureFlash: true
}))

function checkAuthenticated(req, res, next){
  if(req.isAuthenticated()){
      return next()
  }
  res.redirect("/login")
}

function checkNotAuthenticated(req, res, next){
  if(req.isAuthenticated()){
      return res.redirect("/index")
  }
  next()
}

module.exports = router;