import type {Issue} from "../domain/Issue";
import type {IssueRepository} from "../domain/IssueRepository";

export class ApiRestIssueRepository implements IssueRepository {

    async save(issue: Issue): Promise<void> {
        await fetch("http://localhost:3002/api/v1/issues/pending",{
            method: 'POST',
            body: JSON.stringify(issue),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return Promise.resolve(undefined);
    }
}
