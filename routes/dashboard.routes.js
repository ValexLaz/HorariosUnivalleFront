const router = require("express").Router();

router.get('/dashboard',(req,res)=>{
    res.render('main.ejs')
})

router.get('/userForm',(req,res)=>{
    
    res.render('usuarioFormulario.ejs')
})

router.get('/uniProgramsForm',(req,res)=>{
    res.render('carreraFormulario.ejs')
})

router.get('/semesterForm',(req,res)=>{
    res.render('semestreFormulario.ejs')
})

router.get('/facultyForm',(req,res)=>{
    res.render('facultadFormulario.ejs')
})

module.exports = router;