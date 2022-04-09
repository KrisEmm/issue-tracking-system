const {getConnection} = require("../../config/database");

function SolvedIssueIdGetController(req,res) {
    const issue = getConnection().get("SolvedIssues").find({id: req.params.id}).value()
    res.status(200).json(issue)
}

module.exports = {SolvedIssueIdGetController}
