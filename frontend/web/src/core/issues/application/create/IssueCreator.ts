import type {Issue} from "../../domain/Issue";
import type {IssueRepository} from "../../domain/IssueRepository";

export class IssueCreator {
    private repository: IssueRepository;

    constructor(repository: IssueRepository) {
        this.repository = repository;
    }

    async execute(issue: Issue): Promise<void>{
        await this.repository.save(issue);
    }
}
