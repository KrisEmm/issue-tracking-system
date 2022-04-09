<script lang="ts">
 import {defineComponent} from "vue";

 type CustomerInfo = {
   name: String,
   email: String,
   phone: String
 }

 export default defineComponent({
   data(){
     const formIssueCustomer: CustomerInfo ={
       name:"",
       email:"",
       phone:""
     };
     return {
       formIssueCustomer
     }
   },
   methods:{
     setIssueCustomer():void{
      localStorage.setItem("customer", JSON.stringify(this.formIssueCustomer))
      this.formIssueCustomer ={
        name:"",
        email:"",
        phone:""
      }
      window.location.href = "/report";
    }
   },
   computed:{
     isNotValid():boolean{
       const {name, email, phone} = this.formIssueCustomer

       if( name.trim() !== "" && email.trim() !== "" && phone.trim() !== ""){
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
            <a class="nav-link active" aria-current="page" href="/">Home</a>
        </div>
      </div>
    </nav>
  </header>
  <div class="px-4 py-5 my-5">
    <h1 class="display-6 fw-bold text-center">General Information</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 text-center">Fill in the fields with your personal information.</p>
      <form class="container w-75" @submit.prevent="setIssueCustomer">
        <div class="mb-3">
          <label for="name" class="form-label">Full name</label>
          <input type="text" name="name" id="name" class="form-control" v-model="formIssueCustomer.name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" name="email" id="email" class="form-control" v-model="formIssueCustomer.email">
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label">Phone number</label>
          <input type="text" name="phone" id="phone" class="form-control" v-model="formIssueCustomer.phone">
        </div>
        <button type="submit" class="btn btn-primary btn-lg d-block" :disabled="isNotValid">Continue</button>
      </form>
    </div>
  </div>
</template>
