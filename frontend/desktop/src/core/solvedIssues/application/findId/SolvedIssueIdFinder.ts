import type {SolvedIssue} from "../../domain/SolvedIssue";
import type {SolvedIssueRepository} from "../../domain/SolvedIssueRepository";

export class SolvedIssueIdFinder {
    private repository:SolvedIssueRepository

    constructor(repository: SolvedIssueRepository) {
        this.repository = repository;
    }

    execute(id:String):Promise<SolvedIssue | undefined>{
        return this.repository.findSolvedIssue(id);
    }
}
