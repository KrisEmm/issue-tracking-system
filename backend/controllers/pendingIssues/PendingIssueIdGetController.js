const {getConnection} = require("../../config/database");

function PendingIssueIdGetController(req,res) {
 const issue = getConnection().get("PendingIssues").find({id: req.params.id}).value()
 res.status(200).json(issue)
}

module.exports = {PendingIssueIdGetController}
