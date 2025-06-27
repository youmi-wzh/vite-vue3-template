import { defineComponent, ref, computed } from "vue";
import { useUserStore } from "@/stores/user";

export default defineComponent({
  name: "ExampleJsx",
  props: {
    title: {
      type: String,
      default: "User List",
    },
  },
  emits: ["userClick"],
  setup(props, { emit }) {
    const userStore = useUserStore();

    const searchTerm = ref("");
    const selectedUserId = ref(null);

    const filteredUsers = computed(() => {
      if (!searchTerm.value) return userStore.userList;
      return userStore.userList.filter((user) => user.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
    });

    const handleUserClick = (user) => {
      selectedUserId.value = user.id;
      emit("userClick", user);
    };

    const renderUserItem = (user) => (
      <div
        key={user.id}
        class={["user-item", { active: selectedUserId.value === user.id }]}
        onClick={() => handleUserClick(user)}
      >
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );

    return () => (
      <div class="example-jsx">
        <header class="header">
          <h2>{props.title}</h2>
          <input v-model={searchTerm.value} type="text" placeholder="Search users..." class="search-input" />
        </header>

        <div class="user-list">
          {filteredUsers.value.length > 0 ? (
            filteredUsers.value.map(renderUserItem)
          ) : (
            <div class="no-users">No users found</div>
          )}
        </div>

        {selectedUserId.value && <div class="selected-info">Selected user ID: {selectedUserId.value}</div>}
      </div>
    );
  },
});
