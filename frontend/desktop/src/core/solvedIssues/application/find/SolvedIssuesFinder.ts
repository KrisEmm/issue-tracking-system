import type {SolvedIssue} from "../../domain/SolvedIssue";
import type {SolvedIssueRepository} from "../../domain/SolvedIssueRepository";

export class SolvedIssuesFinder {
    private repository: SolvedIssueRepository;

    constructor(repository: SolvedIssueRepository) {
        this.repository = repository;
    }

    execute(): Promise<Array<SolvedIssue>> {
        return this.repository.findAllSolvedIssues();
    }
}
