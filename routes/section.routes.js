const router = require("express").Router();

router.get('/register',(req,res)=>{
    if (req.isAuthenticated()) {
        var user = req.user
    }
    res.render('sections/register.ejs',{user})
});
router.get('/records',(req,res)=>{
    if (req.isAuthenticated()) {
        var user = req.user
    }
    res.render('sections/records.ejs',{user})
});

router.get('/professor',(req,res)=>res.render("sections/docente.ejs")) 

module.exports = router;