const {getConnection} = require("../../config/database");

function SolvedAllIssueGetController(req,res) {
    const issues = getConnection().get("SolvedIssues").value();
    res.status(200).json(issues)
}

module.exports = {SolvedAllIssueGetController}
