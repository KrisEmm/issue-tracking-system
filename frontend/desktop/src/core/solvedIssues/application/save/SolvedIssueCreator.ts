import type {SolvedIssue} from "../../domain/SolvedIssue";
import type {SolvedIssueRepository} from "../../domain/SolvedIssueRepository";

export class SolvedIssueCreator {
    private repository: SolvedIssueRepository


    constructor(repository: SolvedIssueRepository) {
        this.repository = repository;
    }

    execute(issue:SolvedIssue):Promise<void>{
        return this.repository.SaveSolvedIssues(issue);
    }
}
