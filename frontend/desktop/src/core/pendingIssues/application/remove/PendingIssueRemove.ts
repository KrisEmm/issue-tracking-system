import type {PendingIssueRepository} from "../../domain/PendingIssueRepository";

export class PendingIssueRemove {
    private repository: PendingIssueRepository

    constructor(repository: PendingIssueRepository) {
        this.repository = repository;
    }

    execute(id:String):Promise<void>{
        return this.repository.removePendingIssue(id);
    }
}
