<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center vh-100"
  >
    <h1 class="mb-4 text-success">Usuarios-App</h1>

    <div class="card p-4 shadow" style="max-width: 400px; width: 100%">
      <h3 class="text-center mb-4">Ingrese a la Plataforma</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">E-mail:</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="ejemplo@email.com"
            required
          />

          <div class="mb-3">
            <label for="password" class="form-label">Contraseña:</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="password"
              placeholder="********"
              required
            />

            <div class="mt-3 d-grid">
              <button type="submit" class="btn btn-success">Ingresar</button>
            </div>
          </div>
        </div>
      </form>

      <p v-if="error" class="text-danger mt-3 text-center fw-bold fs-5">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";

const router = useRouter();
const { login } = useAuth();

const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = () => {
  const success = login(email.value, password.value);
  definePageMeta({
    layout: "blank",
  });
  if (success) {
    const { currentUser } = useAuth();
    if (currentUser.value?.role === "admin") {
      router.push("/dashAdmin");
    } else if (currentUser.value?.role === "revisor") {
      router.push("/dashRevisor");
    }
  } else {
    error.value = "Usuario y/o Contraseña incorrectos";
    email.value = "";
    password.value = "";
  }
};
</script>
