const router = require("express").Router();

router.get('/dashboard',(req,res)=>{
    res.render('index2.ejs')
}) 


module.exports = router;