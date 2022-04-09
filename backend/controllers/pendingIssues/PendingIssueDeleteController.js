const {getConnection} = require("../../config/database");

function PendingIssueDeleteController(req,res) {
 getConnection().get("PendingIssues").remove({id:req.params.id}).write();
 res.status(200).end()
}

module.exports = {PendingIssueDeleteController}
