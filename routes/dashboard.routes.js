const router = require("express").Router();

router.get('/dashboardPrincipal',(req,res)=>{
    res.render('index2.ejs')
}) 


module.exports = router;