import type { User } from "~/types/User";

export const users: Record<string, User> = {
  admin: {
    email: "admin@email.com",
    password: "1234",
    role: "admin",
  },
  revisor: {
    email: "revisor@email.com",
    password: "5678",
    role: "revisor",
  },
};
