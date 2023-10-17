const router = require("express").Router();

router.get('/dashboard',(req,res)=>{
    res.render('index2.ejs')
})

router.get('/usuarioFormulario',(req,res)=>{
    
    res.render('usuarioFormulario.ejs')
})

router.get('/carreraFormulario',(req,res)=>{
    res.render('carreraFormulario.ejs')
})

router.get('/semestreFormulario',(req,res)=>{
    res.render('semestreFormulario.ejs')
})

router.get('/facultadFormulario',(req,res)=>{
    res.render('facultadFormulario.ejs')
})

module.exports = router;