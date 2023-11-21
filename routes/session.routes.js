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
  
router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render("sections/login.ejs")
})
  
router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render("register.ejs")
})
    
router.delete("/logout", (req, res) => {
    req.logout(req.user, err => {
      if(err) return next(err)
      res.redirect("/")
    })
});

router.post('/login', async(req,res,next)=>{
  try{
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
    })
    console.log(users); 
    next();
  } catch (e) {
    console.log(e);
    res.redirect('/login')
  }

},checkNotAuthenticated,passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

router.get('/',(req,res)=>{
  console.log(req.user);
   res.render('main.ejs', {session:req.user || false})
});

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