import type {PendingIssue} from "../../domain/PendingIssue";
import type {PendingIssueRepository} from "../../domain/PendingIssueRepository";

export class PendingIssueIdFinder {
    private repository: PendingIssueRepository;


    constructor(repository: PendingIssueRepository) {
        this.repository = repository;
    }
    
    execute(id:String):Promise<PendingIssue>{
        return this.repository.findPendingIssue(id);
    }
}
