<template>
  <div class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Crear Usuario</h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
          ></button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="saveUser">
            <div class="mb-3">
              <label class="form-label">Nombre(s)</label>
              <input
                type="text"
                class="form-control"
                v-model="user.name"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Apellido(s)</label>
              <input
                type="text"
                class="form-control"
                v-model="user.lastname"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                v-model="user.email"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Contraseña</label>
              <input
                type="password"
                class="form-control"
                v-model="user.password"
                required
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Rol</label>
              <select class="form-select" v-model="user.role" required>
                <option value="" disabled>Seleccionar Rol</option>
                <option value="admin">Administrador</option>
                <option value="revisor">Revisor</option>
              </select>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button
            type="submit"
            class="btn btn-secondary"
            @click="$emit('close')"
          >
            Cancelar
          </button>
          <button class="btn btn-success" @click="saveUser">Guardar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Backdrop -->
  <div class="modal-backdrop fade show"></div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "CreateUser",
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  methods: {
    async saveUser() {
      if (
        !this.user.name ||
        !this.user.lastname ||
        !this.user.email ||
        !this.user.password ||
        !this.user.role
      ) {
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: "Por favor completa todos los campos",
        });
        return;
      }

      try {
        await axios.post("http://localhost:8000/users", this.user);
        Swal.fire({
          icon: "success",
          title: "Usuario Creado",
          text: "Usuario Creado Correctamente",
        });
        //this.$emit("save", { ...this.user });
        this.$emit("close");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al crear usuario",
          text: error.response?.data?.message || "Ocurrió un error",
        });
      }
    },
  },
};
</script>
