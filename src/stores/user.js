import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  // state
  const user = ref(null);
  const userList = ref([
    { id: 1, name: "Alice", email: "RZIYU@example.com" },
    { id: 2, name: "Bob", email: "1Fb9W@example.com" },
    { id: 3, name: "Charlie", email: "1Fb9W@example.com" },
  ]);
  const isLoggedIn = ref(false);

  // getters
  const userName = computed(() => user.value?.name || "Guest");

  // actions
  function login(userData) {
    user.value = userData;
    isLoggedIn.value = true;
  }

  function logout() {
    user.value = null;
    isLoggedIn.value = false;
  }

  return {
    user,
    isLoggedIn,
    userName,
    userList,
    login,
    logout,
  };
});
