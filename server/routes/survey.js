let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

// Connect to survey model
let surveyController = require("../controllers/survey");

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) {
      return res.redirect("/login");
    }
    next();
  }

/* GET Route for the Survey List page - READ Operation */
router.get("/", requireAuth, surveyController.displaySurveyList);

/* GET Route for displaying the Results page*/
router.get("/results", requireAuth, surveyController.displayResultsPage)

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add/:id", surveyController.addpage);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add/:id", surveyController.addprocesspage);

/* GET to perform  Deletion - DELETE Operation */
router.get("/delete/:id", requireAuth, surveyController.deletepage);

// router.get("/survey", surveyController.surveyList)

module.exports = router;