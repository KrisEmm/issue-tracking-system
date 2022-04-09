import type {SolvedIssueCustomer} from "./SolvedIssueCustomer";
import type {SolvedIssueSolution} from "./SolvedIssueSolution";

export class SolvedIssue {
    private readonly _id: String;
    private readonly _type: String;
    private readonly _title: String;
    private readonly _description: String;
    private readonly _priority: String;
    private readonly _customer: SolvedIssueCustomer;
    private readonly _information: SolvedIssueSolution;


    constructor(id: String, type: String, title: String, description: String, priority: String, customer: SolvedIssueCustomer, information: SolvedIssueSolution) {
        this._id = id;
        this._type = type;
        this._title = title;
        this._description = description;
        this._priority = priority;
        this._customer = customer;
        this._information = information;
    }


    get id(): String {
        return this._id;
    }

    get type(): String {
        return this._type;
    }

    get title(): String {
        return this._title;
    }

    get description(): String {
        return this._description;
    }

    get priority(): String {
        return this._priority;
    }

    get customer(): SolvedIssueCustomer {
        return this._customer;
    }

    get information(): SolvedIssueSolution {
        return this._information;
    }
}
