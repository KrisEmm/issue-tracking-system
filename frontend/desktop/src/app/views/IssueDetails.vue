<script lang="ts">
import {defineComponent} from "vue";
import {useRoute} from "vue-router";
import {SolvedIssueIdFinder} from "../../core/solvedIssues/application/findId/SolvedIssueIdFinder";
import {SolvedIssue} from "../../core/solvedIssues/domain/SolvedIssue";
import {SolvedIssueCustomer} from "../../core/solvedIssues/domain/SolvedIssueCustomer";
import {SolvedIssueSolution} from "../../core/solvedIssues/domain/SolvedIssueSolution";
import {InMemorySolvedIssueRepository} from "../../core/solvedIssues/infrastructure/InMemorySolvedIssueRepository";

export default defineComponent({
  data(){
    return{
      issue: new SolvedIssue(
          "", "", "", "", "",
          new SolvedIssueCustomer(
              "",
              "",
              ""),
          new SolvedIssueSolution(
              "",
              ""
          )
      )
    }
  },
  methods:{
    async getSolvedIssueById(id:String):Promise<SolvedIssue>{
      const solvedIssueIdFinder = new SolvedIssueIdFinder(new InMemorySolvedIssueRepository())
      return await solvedIssueIdFinder.execute(id)
    }
  },
  async mounted() {
    const {id, type, title, description, priority, customer, information} = await
        this.getSolvedIssueById(<String>useRoute().params.id)
    this.issue = new SolvedIssue(
        id, type, title, description, priority,
        new SolvedIssueCustomer(
        customer.name,
        customer.email,
        customer.phone),
        new SolvedIssueSolution(
            information.problem,
            information.solution
        )
    );
  }
})
</script>

<template>
  <header class="container-fluid w-75">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand " href="/">Issue Tracking System</a>
        <div class="navbar-nav">
          <a class="nav-link active" href="/">Pending Issues</a>
          <a class="nav-link active" href="/issues/solved">Solved Issues</a>
        </div>
      </div>
    </nav>
  </header>
  <div class="container-fluid w-75 mt-3">
   <div class="d-flex justify-content-between border-bottom">
     <h1 class="h2 fw-bold">Issue Details</h1>
     <div>
       <a class="btn btn-secondary px-4 mx-5 btn-sm" href="/issues/solved">Close</a>
     </div>
   </div>
    <div>
      <div>
        <div class="mt-3">
          <p class="h5">User Information</p>
          <div class="mb-3 mx-3">
            <div class="mb-6">
              <p class="fs-6 fw-normal mb-0">Name : <span  class="lead fs-6">{{issue.customer.name}}</span></p>
              <p class="fs-6 fw-normal mb-0">Email : <span  class="lead fs-6">{{issue.customer.email}}</span></p>
              <p class="fs-6 fw-normal mb-0">Phone : <span  class="lead fs-6">{{issue.customer.phone}}</span></p>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <p class="h5">Issue Reported</p>
          <div class="mb-3 mx-3">
            <div class="mb-6">
              <p  class="fs-6 fw-normal mb-0">Id : <span  class="lead fs-6">{{issue.id}}</span></p>
              <p  class="fs-6 fw-normal mb-0">Title : <span  class="lead fs-6">{{issue.title}}</span></p>
              <p  class="fs-6 fw-normal mb-0">Description : <span  class="lead fs-6">{{issue.description}}</span></p>
              <p  class="fs-6 fw-normal mb-0">Type : <span  class="lead fs-6">{{issue.type}}</span></p>
              <p  class="fs-6 fw-normal mb-0">Priority : <span  class="lead fs-6">{{issue.priority}}</span></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="h5 mt-3">Issue Solution</p>
        <div class="mt-3 mx-3">
          <div class="mb-3">
            <p>What was the problem?</p>
            <p class="lead fs-6">{{issue.information.problem}}</p>
          </div>
          <div class="mb-3">
            <p>What was the solution?</p>
            <p class="lead fs-6">{{issue.information.solution}}</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style>

</style>
