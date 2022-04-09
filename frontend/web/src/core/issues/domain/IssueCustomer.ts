export class IssueCustomer {
    private _name: String;
    private _email: String;
    private _phone: String;


    constructor(name: String, email: String, phone: String) {
        this._name = name;
        this._email = email;
        this._phone = phone;
    }


    get name(): String {
        return this._name;
    }

    get email(): String {
        return this._email;
    }

    get phone(): String {
        return this._phone;
    }
}
