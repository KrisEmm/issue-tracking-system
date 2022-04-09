import type {PendingIssue} from "./PendingIssue";

export interface PendingIssueRepository {
    findAllPendingIssues(): Promise<Array<PendingIssue>>;
    findPendingIssue(id:String): Promise<PendingIssue>;
    removePendingIssue(id:String): Promise<void>;
}
