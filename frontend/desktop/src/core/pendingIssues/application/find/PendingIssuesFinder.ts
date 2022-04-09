import type {PendingIssue} from "../../domain/PendingIssue";
import type {PendingIssueRepository} from "../../domain/PendingIssueRepository";

export class PendingIssuesFinder {
    private repository: PendingIssueRepository;

    constructor(repository: PendingIssueRepository) {
        this.repository = repository;
    }

    execute(): Promise<Array<PendingIssue>> {
        return this.repository.findAllPendingIssues();
    }
}
