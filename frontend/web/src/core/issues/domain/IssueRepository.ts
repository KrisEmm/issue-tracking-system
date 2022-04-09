import type {Issue} from "./Issue";

export interface IssueRepository {
    save(issue:Issue): Promise<void>;
}
