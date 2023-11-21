const router = require("express").Router();

router.get('/register',(req,res)=>{
    res.render('sections/register.ejs')
});

router.get('/professor',(req,res)=>res.render("sections/docente.ejs")) 

module.exports = router;