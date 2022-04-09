import type {PendingIssueCustomer} from "./PendingIssueCustomer";

export class PendingIssue {
    private readonly _id: String;
    private readonly _type: String;
    private readonly _title: String;
    private readonly _description: String;
    private readonly _priority: String;
    private readonly _customer: PendingIssueCustomer;


    constructor(id: String, type: String, title: String, description: String, priority: String, customer: PendingIssueCustomer) {
        this._id = id;
        this._type = type;
        this._title = title;
        this._description = description;
        this._priority = priority;
        this._customer = customer;
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

    get customer(): PendingIssueCustomer {
        return this._customer;
    }
}
