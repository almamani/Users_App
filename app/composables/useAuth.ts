import { users } from "~/mocks/mockUsers";
import type { User } from "~/types/User";

export const useAuth = () => {
  const currentUser = useState<User | null>("currentUser", () => null);

  const login = (email: string, password: string) => {
    const user = Object.values(users).find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      currentUser.value = user;
      return true;
    }
    return false;
  };

  const logout = () => {
    currentUser.value = null;
  };

  return { currentUser, login, logout };
};
