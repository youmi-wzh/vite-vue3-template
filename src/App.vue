<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <span class="separator">|</span>
      <router-link to="/jsx">JSX</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 20px;
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
