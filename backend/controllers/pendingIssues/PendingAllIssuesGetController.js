const {getConnection} = require("../../config/database");

function PendingAllIssuesGetController(req,res) {
    const issues = getConnection().get("PendingIssues").value();
    res.status(200).json(issues)
}

module.exports = {PendingAllIssuesGetController}
