<script lang="ts">
import {defineComponent} from "vue";
import {SolvedIssuesFinder} from "../../../core/solvedIssues/application/find/SolvedIssuesFinder";
import {SolvedIssue} from "../../../core/solvedIssues/domain/SolvedIssue";
import {InMemorySolvedIssueRepository} from "../../../core/solvedIssues/infrastructure/InMemorySolvedIssueRepository";

const getSolvedIssues = async ():Promise<Array<SolvedIssue>> =>{
  const solvedIssuesService = new SolvedIssuesFinder(new InMemorySolvedIssueRepository());
  return await solvedIssuesService.execute()
}
export default defineComponent({
  data(){
    let solvedIssues:Array<SolvedIssue> = [];
    return {
      solvedIssues
    }
  },
  async mounted() {
    this.solvedIssues= await getSolvedIssues();
  }
})
</script>
<template>
  <div class="container">
    <h1 class="mb-4">Solved Issues</h1>
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
      <tr v-for="(solvedIssue, index) in solvedIssues">
        <td class="col">{{index + 1 }}</td>
        <td class="col">{{solvedIssue.type}}</td>
        <td class="col">{{solvedIssue.title}}</td>
        <td class="col-6">{{solvedIssue.description}}</td>
        <td class="col">{{solvedIssue.priority}}</td>
        <td class="col">
          <a class="btn btn-primary" v-bind:href="'/issues/solved/'+solvedIssue.id">
            details
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
