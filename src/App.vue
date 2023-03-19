<template>
  <div class="nav">
    <router-link to="/">Layout</router-link>
    <router-link to="/Flex">Flex</router-link>
  </div>
  <router-view />
</template>

<style scoped lang="scss">
.nav {
  text-align: center;

  & > a {
    & + a {
      margin-left: 15px;
    }
  }
}
</style>
