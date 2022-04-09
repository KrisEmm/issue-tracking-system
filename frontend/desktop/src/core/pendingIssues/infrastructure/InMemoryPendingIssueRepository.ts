import type {PendingIssue} from "../domain/PendingIssue";
import type {PendingIssueRepository} from "../domain/PendingIssueRepository";

export class InMemoryPendingIssueRepository implements PendingIssueRepository {

     async findAllPendingIssues(): Promise<Array<PendingIssue>> {
         const data = await fetch("http://localhost:3002/api/v1/issues/pending/", {
             method: "GET",
             headers: {
                 'Content-Type': 'application/json'
             }
         })
         return data.json()
    }

    async findPendingIssue(id: String): Promise<PendingIssue> {
        const data = await fetch(`http://localhost:3002/api/v1/issues/pending/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data.json()
    }

    async removePendingIssue(id: String): Promise<void> {
        const data = await fetch(`http://localhost:3002/api/v1/issues/pending/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data.json()
    }

}
