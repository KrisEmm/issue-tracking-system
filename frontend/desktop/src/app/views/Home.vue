<script setup lang="ts">
import TablePendingIssues from "../components/Issues/TablePendingIssues.vue";
</script>

<template>
  <header class="container-fluid w-75">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">PendingIssue Tracking System</a>
        <div class="navbar-nav">
          <a class="nav-link active" href="/">Pending Issues</a>
          <a class="nav-link active" href="/issues/solved">Solved Issues</a>
        </div>
      </div>
    </nav>
  </header>
  <div class="container px-4 py-3 my-3 text-center">
    <TablePendingIssues />
  </div>
</template>

<style>

</style>
