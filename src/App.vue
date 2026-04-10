<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <span class="separator">|</span>
      <router-link to="/jsx">JSX</router-link>
      <span class="separator">|</span>
      <router-link to="/animation">Animation</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
body {
  background: #f7f7f3;
}

nav {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(44, 62, 80, 0.08);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.separator {
  margin: 0 10px;
}
</style>
