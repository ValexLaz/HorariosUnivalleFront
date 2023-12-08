const router = require("express").Router();

router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
        var user = req.user
    }
    res.render('sections/register.ejs', { user })
});
router.get('/records', (req, res) => {
    if (req.isAuthenticated()) {
        var user = req.user
    }
    res.render('sections/records.ejs', { user })
});
router.get('/generateSchedule', (req, res) => {
    if (req.isAuthenticated()) {
        var user = req.user
    }
    res.render('sections/generateSchedule.ejs', { user })
});
router.get('/scheduleRecords', (req, res) => {
    if (req.isAuthenticated()) {
        var user = req.user
    }
    res.render('sections/scheduleRecords.ejs', { user })
});
router.get('/showSchedule', (req, res) => {
    if (req.isAuthenticated()) {
        var user = req.user
    }
    res.render('sections/scheduleModel.ejs', { user })
});

router.get('/professor', (req, res) => res.render("sections/docente.ejs"))

module.exports = router;