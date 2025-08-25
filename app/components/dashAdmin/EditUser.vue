<template>
  <div class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Editar Usuario</h5>
          <button
            type="button"
            class="btn-close"
            @click="$emit('close')"
          ></button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="updateUser">
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
            type="button"
            class="btn btn-secondary"
            @click="$emit('close')"
          >
            Cancelar
          </button>
          <button class="btn btn-primary" @click="updateUser">
            Actualizar
          </button>
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
  name: "EditUser",
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: { ...this.userData },
    };
  },
  methods: {
    async updateUser() {
      if (
        !this.user.name ||
        !this.user.lastname ||
        !this.user.email ||
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
        await axios.put(
          `http://localhost:8000/users/${this.user.id}`,
          this.user
        );
        Swal.fire({
          icon: "success",
          title: "Usuario Actualizado",
          text: "Los cambios se guardaron correctamente",
        });
        this.$emit("updated", { ...this.user });
        this.$emit("close");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al actualizar",
          text: error.response?.data?.message || "Ocurrió un error",
        });
      }
    },
  },
};
</script>
