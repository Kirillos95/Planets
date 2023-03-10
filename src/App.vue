<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/mercury">Mercury</router-link> |
    <router-link to="/venus">Venus</router-link> |
    <router-link to="/earth">Earth</router-link> |
    <router-link to="/mars">Mars</router-link> |
    <router-link to="/jupiter">Jupiter</router-link> |
    <router-link to="/saturnus">Saturnus</router-link> |
    <router-link to="/uranus">Uranus</router-link> |
    <router-link to="/neptune">Neptune</router-link>

    <router-view />
  </nav>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafbfb;
  background-image: url(https://images.wallpaperscraft.com/image/single/galaxy_glow_stars_227799_1920x1200.jpg);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #f6f6f7;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
img {
  border-radius: 60%;
}
</style>
