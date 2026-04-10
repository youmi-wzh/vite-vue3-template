import { defineComponent, ref, computed } from "vue";
import { useUserStore } from "@/stores/user";
import "./jsx-component.scss";

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
    const selectedUser = computed(() => userStore.userList.find((user) => user.id === selectedUserId.value) || null);

    const handleUserClick = (user) => {
      selectedUserId.value = user.id;
      emit("userClick", user);
    };

    const getInitials = (name) =>
      name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const renderUserItem = (user) => (
      <button
        key={user.id}
        type="button"
        class={["user-item", { active: selectedUserId.value === user.id }]}
        onClick={() => handleUserClick(user)}
      >
        <div class="user-avatar">{getInitials(user.name)}</div>
        <div class="user-copy">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        <span class="user-tag">View</span>
      </button>
    );

    return () => (
      <div class="example-jsx">
        <section class="hero-panel">
          <div class="hero-copy">
            <p class="eyebrow">JSX user explorer</p>
            <h2>{props.title}</h2>
            <p class="hero-text">用 JSX 方式组织列表筛选、选中态和详情面板，适合展示组件状态驱动的界面写法。</p>
          </div>

          <div class="hero-stats">
            <div class="stat-card">
              <span>Total users</span>
              <strong>{userStore.userList.length}</strong>
            </div>
            <div class="stat-card">
              <span>Filtered</span>
              <strong>{filteredUsers.value.length}</strong>
            </div>
          </div>
        </section>

        <section class="workspace">
          <div class="panel">
            <header class="panel-header">
              <div>
                <p class="panel-label">Directory</p>
                <h3>Find your teammate</h3>
              </div>
              <label class="search-shell">
                <span>Search</span>
                <input v-model={searchTerm.value} type="text" placeholder="Search users..." class="search-input" />
              </label>
            </header>

            <div class="user-list">
              {filteredUsers.value.length > 0 ? (
                filteredUsers.value.map(renderUserItem)
              ) : (
                <div class="no-users">
                  <p>No users found</p>
                  <span>Try another keyword to match the list.</span>
                </div>
              )}
            </div>
          </div>

          <aside class="panel detail-panel">
            <p class="panel-label">Detail</p>
            {selectedUser.value ? (
              <div class="detail-card">
                <div class="detail-avatar">{getInitials(selectedUser.value.name)}</div>
                <h3>{selectedUser.value.name}</h3>
                <p>{selectedUser.value.email}</p>
                <div class="detail-meta">
                  <span>Selected user ID</span>
                  <strong>{selectedUser.value.id}</strong>
                </div>
              </div>
            ) : (
              <div class="detail-placeholder">
                <h3>No user selected</h3>
                <p>Click a card on the left to inspect the selected user in this panel.</p>
              </div>
            )}
          </aside>
        </section>
      </div>
    );
  },
});
