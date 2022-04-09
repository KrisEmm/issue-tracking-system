<script lang="ts">
import {defineComponent} from "vue";
import {IssueCreator} from "../core/issues/application/create/IssueCreator";
import {Issue} from "../core/issues/domain/Issue";
import {IssueCustomer} from "../core/issues/domain/IssueCustomer";
import {ApiRestIssueRepository} from "../core/issues/infrastructure/ApiRestIssueRepository";
import { v4 as uuidv4 } from 'uuid';

type IssueReported = {
  id: String,
  type: String,
  title: String,
  description: String,
  priority: String
}

export default defineComponent({
  data() {
    const formIssue: IssueReported = {
      id:"",
      type: "",
      title: "",
      description: "",
      priority: "",
    }
    return{
      formIssue,
    }
  },
  methods:{
    reportAnIssue():void{
      const {id, type, title, description, priority} = this.formIssue
      const {name,email,phone} = JSON.parse(localStorage.getItem("customer"))
      this.postReportAnIssue(new Issue(
          id, type, title, description, priority, new IssueCustomer(name,email,phone)
      ))
      this.formIssue = {
        id:"",
        type: "",
        title: "",
        description: "",
        priority: ""
      }
      localStorage.clear();
      window.location.href = "/process-finish";
    },
    async postReportAnIssue(issue:Issue): Promise<void> {
      const issueCreatorService = new IssueCreator(new ApiRestIssueRepository())
      await issueCreatorService.execute(issue)
    },
    handleClickCancel():void{
      window.location.href = "/";
    },

  },
  mounted() {
    this.formIssue.id = uuidv4()
  },
  computed:{
    isNotValid():boolean{
      const {type, title, description, priority} = this.formIssue

      if( type.trim() !== "" && title.trim() !== "" && description.trim() !== "" && priority.trim() !== ""){
        return false
      }else {

      return true
      }
    }
  }
})
</script>
<template>
  <header class="container-fluid w-75">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Technical Support</a>
        <div class="navbar-nav">
            <a class="nav-link active" href="/">Home</a>
        </div>
      </div>
    </nav>
  </header>
  <div class="px-4 py-5 my-5">
    <h1 class="display-6 fw-bold text-center">Report an issue</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 text-center">Please fill in all the fields.</p>
      <form class="container w-75" @submit.prevent="reportAnIssue">
        <div class="mb-3">
            <label for="titleIssue" class="form-label">Title</label>
            <input type="text" name="titleIssue" id="titleIssue" class="form-control" v-model="formIssue.title">
        </div>
        <div class="mb-3">
            <label for="descriptionIssue" class="form-label">Description</label>
            <textarea class="form-control" id="descriptionIssue" rows="4" v-model="formIssue.description"></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Type</label>
          <div class="col-auto">
            <select id="typeIssue" class="form-select" v-model="formIssue.type">
              <option value="" selected>Select a type</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-check-label me-3">Priority</label>
          <div class="form-check form-check-inline">
            <label for="priorityIssueLow" class="form-check-label">Low</label>
            <input type="radio" name="priorityIssue" id="priorityIssueLow" class="form-check-input" value="low"
            v-model="formIssue.priority">
          </div>
          <div class="form-check form-check-inline">
            <label for="priorityIssueHigh" class="form-check-label">High</label>
            <input type="radio" name="priorityIssue" id="priorityIssueHigh" class="form-check-input" value="high"
                   v-model="formIssue.priority">
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" class="btn btn-primary btn-lg px-5" :disabled="isNotValid">Create</button>
          <button type="button" class="btn btn-outline-secondary btn-lg" @click="handleClickCancel">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>
