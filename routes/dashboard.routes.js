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

router.get('/classForm',(req,res)=>{
    res.render('materiaFormulario.ejs')
})

router.get('/classroomForm',(req,res)=>{
    res.render('aulaFormulario.ejs')
})

router.get('/classroom_typesForm',(req,res)=>{
    res.render('tipoAulaFormulario.ejs')
})

router.get('/buildingsForm',(req,res)=>{
    res.render('moduloFormulario.ejs')
})

router.get('/professorsForm',(req,res)=>{
    res.render('docenteFormulario.ejs')
})

router.get('/professors_availabilitiesForm',(req,res)=>{
    res.render('disponibilidadDocenteFormulario.ejs')
})

router.get('/classroom_availabilitiesForm',(req,res)=>{
    res.render('disponibilidadAulaFormulario.ejs')
})

module.exports = router;