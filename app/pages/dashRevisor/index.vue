<template>
  <div class="container mt-3">
    <!-- Card título -->
    <div class="card shadow-sm">
      <div class="card-body">
        <h4 class="mb-0">Panel del Revisor</h4>
      </div>
    </div>

    <!-- Tabla de revisores -->
    <TableRevisor />
  </div>
</template>

<script setup lang="ts">
import TableRevisor from "~/components/dashRevisor/TableRevisor.vue";

useHead({
  title: "Usuarios-App :: Revisor",
});

definePageMeta({
  middleware: "auth",
});
</script>
