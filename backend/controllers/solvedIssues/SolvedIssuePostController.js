const {getConnection} = require("../../config/database");
const SolvedIssuePostController = (req,res)=> {
    const issue = req.body
    const {
        _id: id,
        _type: type,
        _title: title,
        _description: description,
        _priority: priority,
        _customer: { _name: name, _email: email, _phone: phone },
        _information:{_problem:problem, _solution:solution}
    }=issue
    getConnection().get("SolvedIssues").push({
        id,
        type,
        title,
        description,
        priority,
        customer:{
            name,
            email,
            phone
        },
        information:{
            problem,
            solution
        }
    }).write()
    res.status(201).end()
}

module.exports = {SolvedIssuePostController}
