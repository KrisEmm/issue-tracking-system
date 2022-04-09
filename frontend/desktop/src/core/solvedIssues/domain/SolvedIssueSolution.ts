export class SolvedIssueSolution {
    private _problem: String;
    private _solution: String;


    constructor(problem: String, solution: String) {
        this._problem = problem;
        this._solution = solution;

    }

    get problem(): String {
        return this._problem;
    }

    get solution(): String {
        return this._solution;
    }


}
