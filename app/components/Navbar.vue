<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container">
      <NuxtLink class="navbar-brand text-success fw-bold fs-3" to="/"
        >Usuarios-App</NuxtLink
      >
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="user?.role === 'admin'" class="nav-item">
            <NuxtLink class="nav-link" to="/dashAdmin"></NuxtLink>
          </li>
          <li v-if="user?.role === 'revisor'" class="nav-item">
            <NuxtLink class="nav-link" to="/dashRevisor"></NuxtLink>
          </li>
        </ul>
        <button class="btn btn-danger" @click="handleLogout">Salir</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";
const { currentUser: user, logout } = useAuth();
const router = useRouter();
const handleLogout = () => {
  logout();
  router.push("/");
};
</script>
