const {getConnection} = require("../../config/database")

function PendingIssuePostController(req,res) {
    const issue = req.body
    const {
        _id: id,
        _type: type,
        _title: title,
        _description: description,
        _priority: priority,
        _customer: { _name: name, _email: email, _phone: phone }

    }=issue
    getConnection().get("PendingIssues").push({
        id,
        type,
        title,
        description,
        priority,
        customer:{
            name,
            email,
            phone
        }
    }).write()
    res.status(201).end()
}

module.exports = {PendingIssuePostController}
