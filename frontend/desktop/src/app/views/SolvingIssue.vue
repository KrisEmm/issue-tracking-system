<script lang="ts">
  import {defineComponent} from "vue";
  import {PendingIssueIdFinder} from "../../core/pendingIssues/application/findId/PendingIssueIdFinder";
  import {PendingIssueRemove} from "../../core/pendingIssues/application/remove/PendingIssueRemove";
  import {PendingIssue} from "../../core/pendingIssues/domain/PendingIssue";
  import {InMemoryPendingIssueRepository} from "../../core/pendingIssues/infrastructure/InMemoryPendingIssueRepository";
  import {SolvedIssueCreator} from "../../core/solvedIssues/application/save/SolvedIssueCreator";
  import {SolvedIssue} from "../../core/solvedIssues/domain/SolvedIssue";
  import {SolvedIssueCustomer} from "../../core/solvedIssues/domain/SolvedIssueCustomer";
  import {SolvedIssueSolution} from "../../core/solvedIssues/domain/SolvedIssueSolution";
  import {InMemorySolvedIssueRepository} from "../../core/solvedIssues/infrastructure/InMemorySolvedIssueRepository";
  import { useRoute } from 'vue-router'
  import { PendingIssueCustomer } from "../../core/pendingIssues/domain/PendingIssueCustomer";

  export default defineComponent({
    data(){

      return {
        id: useRoute().params.id,
        questions:{
          problem:"",
          solution:""
        },
        issue: new PendingIssue("","","","","",new PendingIssueCustomer("","",""))
      }
    },
    methods:{
      setSolvedIssue(){
        const {problem,solution} = this.questions
        const { id, type, title, description, priority, customer} =this.issue
        const solvedIssue = new SolvedIssue(
            id, type, title, description, priority,
            new SolvedIssueCustomer(
                customer.name,
                customer.email,
                customer.phone
            ),
            new SolvedIssueSolution(
                problem,
                solution
            )
          )
        this.saveSolvedIssue(solvedIssue)
        this.removePendingIssue(<String>this.id)
        window.location.href = "/issues/solved";
      },
      async saveSolvedIssue(issue:SolvedIssue):Promise<void>{
        const solvedIssueCreator = new SolvedIssueCreator(new InMemorySolvedIssueRepository())
        await solvedIssueCreator.execute(issue);
      },
      async removePendingIssue(id:String):Promise<void>{
        const pendingIssueRemove = new PendingIssueRemove(new InMemoryPendingIssueRepository())
        await pendingIssueRemove.execute(id)
      },
      async getPendingIssue(id:String): Promise<PendingIssue>{
        const pendingIssueIdFinder = new PendingIssueIdFinder(new InMemoryPendingIssueRepository())
        return await pendingIssueIdFinder.execute(id);

      },
      handleClickCancel():void{
        window.location.href = "/";
      },
    },
    computed:{
      isNotValid():boolean{
        const {problem,solution} = this.questions

        if( problem.trim() !== "" && solution.trim() !== ""){
          return false
        }else {

          return true
        }
      }
    },
    async mounted() {
      const {id, type, title, description, priority, customer} = await
          this.getPendingIssue(<String>useRoute().params.id)
      this.issue = new PendingIssue(id, type, title, description, priority, new PendingIssueCustomer(
          customer.name,
          customer.email,
          customer.phone
      ));
    }
  })
</script>

<template>
  <header class="container-fluid w-75">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand " href="/">PendingIssue Tracking System</a>
        <div class="navbar-nav">
          <a class="nav-link active" href="/">Pending Issues</a>
          <a class="nav-link active" href="/issues/solved">Solved Issues</a>
        </div>
      </div>
    </nav>
  </header>
  <div class="container-fluid w-75 mt-3 mb-5">
   <div class="border-bottom">
     <h1 class="h2 fw-bold">Solving the problem</h1>
     <p class="lead mb-2">After solving the problem, fill in the fields describing what the root problem was and the
       solution you did
       .</p>
   </div>
    <div>
      <div>
        <div class="border-bottom mt-3">
          <p class="h5">User Information</p>
          <div class="mb-3 mx-3">
            <div class="mb-6">
              <p class="fs-6 fw-normal mb-0">Name : <span  class="lead fs-6">{{issue.customer.name}}</span></p>
              <p class="fs-6 fw-normal mb-0">Email : <span  class="lead fs-6">{{issue.customer.email}}</span></p>
              <p class="fs-6 fw-normal mb-0">Phone : <span  class="lead fs-6">{{issue.customer.phone}}</span></p>
            </div>
          </div>
        </div>
        <div class="border-bottom mt-3">
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
        <form class="mt-3 mx-3" @submit.prevent="setSolvedIssue">
          <div class="mb-3">
            <label  class="form-label">What was the problem?</label>
            <textarea class="form-control" id="descriptionIssue" rows="4" v-model="questions.problem"></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">What was the solution?</label>
            <textarea class="form-control" id="description-Issue" rows="4" v-model="questions.solution"></textarea>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-primary btn-lg px-5" :disabled="isNotValid">Finish</button>
            <button type="button" class="btn btn-outline-secondary btn-lg" @click="handleClickCancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>

</style>
