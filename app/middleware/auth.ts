import { defineNuxtRouteMiddleware, navigateTo } from "#app";
import { useAuth } from "~/composables/useAuth";

export default defineNuxtRouteMiddleware((to) => {
  const { currentUser } = useAuth();

  // Protección usuario logueado
  if (!currentUser.value) {
    return navigateTo("/");
  }

  // Protección de acuerdo a l roll
  if (to.path === "/dashAdmin" && currentUser.value.role !== "admin") {
    return navigateTo("/");
  }

  if (to.path === "/dashRevisor" && currentUser.value.role !== "revisor") {
    return navigateTo("/");
  }
});
