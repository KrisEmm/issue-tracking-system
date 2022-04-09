const low = require("lowdb")
const FileAsync = require("lowdb/adapters/FileAsync")

let db;

async function createConnection(){
    const adapter = new FileAsync('./data/issues.json');
    db = await low(adapter);
    db.defaults({PendingIssues:[],SolvedIssues:[]}).write();
}
function getConnection(){
    return db
}

module.exports ={
    createConnection,
    getConnection
}
