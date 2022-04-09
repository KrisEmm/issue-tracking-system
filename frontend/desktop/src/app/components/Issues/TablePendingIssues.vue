<script lang="ts">
import {defineComponent} from "vue";
import {PendingIssuesFinder} from "../../../core/pendingIssues/application/find/PendingIssuesFinder";
import type {PendingIssue} from "../../../core/pendingIssues/domain/PendingIssue";
import {InMemoryPendingIssueRepository} from "../../../core/pendingIssues/infrastructure/InMemoryPendingIssueRepository";

const getPendingIssues = async ():Promise<Array<PendingIssue>> =>{
  const pendingIssuesService = new PendingIssuesFinder(new InMemoryPendingIssueRepository());
  return await pendingIssuesService.execute()
}
export default defineComponent({
  data(){
    let pendingIssues:Array<PendingIssue> = [];
    return {
      pendingIssues
    }
  },
  async mounted() {
    this.pendingIssues= await getPendingIssues();
  }
})
</script>
<template>
  <div class="container">
    <h1 class="mb-4">Pending Issues</h1>
    <table class="table">
      <thead class="table-light">
      <tr>
        <th>Issue No</th>
        <th>Type</th>
        <th>Title</th>
        <th>Description</th>
        <th>Priority</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(pendingIssue, index) in pendingIssues">
        <td class="col">{{index + 1 }}</td>
        <td class="col">{{pendingIssue.type}}</td>
        <td class="col">{{pendingIssue.title}}</td>
        <td class="col-6">{{pendingIssue.description}}</td>
        <td class="col">{{pendingIssue.priority}}</td>
        <td class="col">
          <a class="btn btn-primary" v-bind:href="'/issues/pending/'+pendingIssue.id">
            Resolve
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
