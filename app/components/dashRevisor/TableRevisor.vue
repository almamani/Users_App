<template>
  <div class="card mt-3 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">Lista de Usuarios</h5>

      <table class="table table-striped table-hover mt-3">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre(s)</th>
            <th scope="col">Apellido(s)</th>
            <th scope="col">Correo electrónico</th>
            <th scope="col">Rol</th>
            <th scope="col">Fecha del registro</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.registeredAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  registeredAt: string;
}

const users: User[] = [
  {
    id: 1,
    firstName: "Ana",
    lastName: "García",
    email: "ana.garcia@example.com",
    role: "Administrador",
    registeredAt: "2025-01-15",
  },
  {
    id: 2,
    firstName: "Carlos",
    lastName: "Pérez",
    email: "carlos.perez@example.com",
    role: "Revisor",
    registeredAt: "2025-02-10",
  },
  {
    id: 3,
    firstName: "Lucía",
    lastName: "Martínez",
    email: "lucia.martinez@example.com",
    role: "Revisor",
    registeredAt: "2025-03-01",
  },
];
</script>
