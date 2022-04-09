import type {SolvedIssue} from "./SolvedIssue";

export interface SolvedIssueRepository {
    findAllSolvedIssues(): Promise<Array<SolvedIssue>>;
    findSolvedIssue(id:String): Promise<SolvedIssue | undefined>;
    SaveSolvedIssues(issue:SolvedIssue): Promise<void>;
}
