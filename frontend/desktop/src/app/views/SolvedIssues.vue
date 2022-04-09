<script setup lang="ts">
import TableSolvedIssues from "../components/Issues/TableSolvedIssues.vue";
</script>

<template>
  <header class="container-fluid w-75">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Issue Tracking System</a>
        <div class="navbar-nav">
          <a class="nav-link active" href="/">Pending Issues</a>
          <a class="nav-link active" href="/issues/solved">Solved Issues</a>
        </div>
      </div>
    </nav>
  </header>
  <div class="container px-4 py-3 my-3 text-center">
    <TableSolvedIssues />
  </div>
</template>

