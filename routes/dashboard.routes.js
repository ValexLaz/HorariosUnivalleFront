const router = require("express").Router();
router.get("/dashboard", (req, res) => res.render("main.ejs"));
router.get("/userForm", (req, res) => res.render("usuarioFormulario.ejs"));
router.get("/uniProgramsForm", (req, res) =>
  res.render("carreraFormulario.ejs")
);
router.get("/semesterForm", (req, res) => res.render("semestreFormulario.ejs"));
router.get("/facultyForm", (req, res) => res.render("facultadFormulario.ejs"));
router.get("/classForm", (req, res) => res.render("materiaFormulario.ejs"));
router.get("/classroomForm", (req, res) => res.render("aulaFormulario.ejs"));
router.get("/classroom/typesForm", (req, res) =>
  res.render("tipoAulaFormulario.ejs")
);
router.get("/buildingForm", (req, res) => res.render("moduloFormulario.ejs"));
router.get("/professorForm", (req, res) => res.render("docenteFormulario.ejs"));
router.get("/professor/classForm", (req, res) => res.render("forms/docente/docentemateria.ejs"));
router.get("/time/availsForm", (req, res) =>
  res.render("forms/docente/disponibilidadDocenteFormulario.ejs")
);
router.get("/classroom/availsForm", (req, res) =>
  res.render("disponibilidadAulaFormulario.ejs")
);
router.get("/clusterForm",(req,res)=>res.render("forms/grupoFormulario.ejs"))


module.exports = router;
