import type {SolvedIssue} from "../domain/SolvedIssue";
import type {SolvedIssueRepository} from "../domain/SolvedIssueRepository";

export class InMemorySolvedIssueRepository implements SolvedIssueRepository {
    static issues:Array<SolvedIssue> = [];

    async findAllSolvedIssues(): Promise<Array<SolvedIssue>> {
        const data = await fetch("http://localhost:3002/api/v1/issues/solved/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data.json()
    }

    async findSolvedIssue(id:String): Promise<SolvedIssue | undefined> {
        const data = await fetch(`http://localhost:3002/api/v1/issues/solved/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data.json()
    }

    async SaveSolvedIssues(issue: SolvedIssue): Promise<void> {
        await fetch("http://localhost:3002/api/v1/issues/solved",{
            method: 'POST',
            body: JSON.stringify(issue),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return Promise.resolve(undefined);
    }

}
