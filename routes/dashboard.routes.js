const router = require("express").Router();

router.get('/dashboard',(req,res)=>{
    res.render('main.ejs')
})
<<<<<<< HEAD
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
=======

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
>>>>>>> bf430631c6bc33c20b7c5d29b0a7d91303f3c690
    res.render('facultadFormulario.ejs')
})

module.exports = router;