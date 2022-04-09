const express = require('express');
const router = express.Router();
const {SolvedAllIssueGetController} = require("../controllers/solvedIssues/SolvedAllIssueGetController")
const {SolvedIssueIdGetController} = require("../controllers/solvedIssues/SolvedIssueIdGetController")
const {SolvedIssuePostController} = require("../controllers/solvedIssues/SolvedIssuePostController")

router.get('/', SolvedAllIssueGetController);
router.get('/:id', SolvedIssueIdGetController);
router.post('/', SolvedIssuePostController);

module.exports = router;
