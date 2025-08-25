<template>
  <div class="container mt-3">
    <div class="card shadow-sm">
      <div class="card-body d-flex justify-content-between align-items-center">
        <h4 class="mb-0">Panel del Administrador</h4>
        <button class="btn btn-success" @click="showCreateUser = true">
          Crear Usuario
        </button>
      </div>
    </div>

    <!-- Tabla de usuarios -->
    <UserTable @edit="onEditUser" @delete="onDeleteUser" />

    <!-- Popup Crear Usuario -->
    <CreateUser v-if="showCreateUser" @close="showCreateUser = false" />
  </div>
</template>

<script setup lang="ts">
import CreateUser from "~/components/dashAdmin/CreateUser.vue";
import EditUser from "~/components/dashAdmin/EditUser.vue";
import UserTable from "~/components/dashAdmin/TableAdmin.vue";

useHead({
  title: "Usuarios-App :: Administrador",
});
definePageMeta({
  middleware: "auth",
});

const showCreateUser = ref(false);
const showEditUser = ref(false);
const selectedUser = ref<any>(null);

function onEditUser(user: any) {
  selectedUser.value = { ...user }; // Clonamos el usuario para no mutar directamente
  showEditUser.value = true;
}

function onDeleteUser(id: number) {
  console.log("Eliminar usuario con ID:", id);
}

function closeEditUser() {
  showEditUser.value = false;
  selectedUser.value = null;
}
</script>
