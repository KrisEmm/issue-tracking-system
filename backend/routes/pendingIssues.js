const express = require('express');
const router = express.Router();
const {PendingAllIssuesGetController} = require('../controllers/pendingIssues/PendingAllIssuesGetController')
const {PendingIssueIdGetController} = require('../controllers/pendingIssues/PendingIssueIdGetController')
const {PendingIssuePostController} = require('../controllers/pendingIssues/PendingIssuePostController')
const {PendingIssueDeleteController} = require('../controllers/pendingIssues/PendingIssueDeleteController')

router.get('/', PendingAllIssuesGetController);
router.get('/:id', PendingIssueIdGetController);
router.post('/', PendingIssuePostController);
router.delete('/:id', PendingIssueDeleteController);
module.exports = router;
