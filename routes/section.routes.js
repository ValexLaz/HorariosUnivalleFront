const router = require("express").Router();

router.get('/register',(req,res)=>{
    res.render('sections/register.ejs')
})

module.exports = router;