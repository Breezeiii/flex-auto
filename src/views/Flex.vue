<template>
  <div class="group">
    <h3>#flex</h3>
    <lay-flex stretch>
      <lay-flex :span="2">{{ 1 }}</lay-flex>
      <lay-flex :span="3">{{ 1 }}</lay-flex>
      <lay-flex :span="1">{{ 1 }}</lay-flex>
    </lay-flex>
    <h3>#flex align</h3>
    <lay-flex style="height: 80px" align="center" justify="space-between">
      <lay-flex>{{ 1 }}</lay-flex>
      <lay-flex>{{ 1 }}</lay-flex>
      <lay-flex>{{ 1 }}</lay-flex>
    </lay-flex>
  </div>
  <div class="group">
    <h3>#inline</h3>
    <lay-flex inline>
      <lay-flex>{{ 1 }}</lay-flex>
      <lay-flex>{{ 1 }}</lay-flex>
      <lay-flex>{{ 1 }}</lay-flex>
    </lay-flex>
    <h3>#inline align</h3>
    <lay-flex inline style="height: 80px" align="center">
      <lay-flex>{{ 1 }}</lay-flex>
      <lay-flex align-self="flex-start">{{ 1 }}</lay-flex>
      <lay-flex>{{ 1 }}</lay-flex>
    </lay-flex>
  </div>
  <div class="group">
    <h3>#auto-span</h3>
    <lay-flex auto-span>
      <lay-flex>{{ 1 }}</lay-flex>
      <lay-flex>{{ 1 }}</lay-flex>
      <lay-flex>{{ 1 }}</lay-flex>
    </lay-flex>
  </div>
  <div class="group">
    <h3>#column</h3>
    <lay-flex column>
      <lay-flex>{{ 1 }}</lay-flex>
      <lay-flex>{{ 1 }}</lay-flex>
      <lay-flex>{{ 1 }}</lay-flex>
    </lay-flex>
  </div>
  <div class="group group-content">
    <h3>#align="center" justify="center"</h3>
    <lay-flex align="center" justify="space-between">
      <lay-flex v-for="item in 6" :key="item">{{ item }}</lay-flex>
    </lay-flex>
    <h3>#wrap align-content="space-between"</h3>
    <lay-flex wrap align-content="space-between">
      <lay-flex v-for="item in 8" :key="item" style="width: 20%">
        {{ item }}
      </lay-flex>
    </lay-flex>
  </div>
  <div class="group">
    <h3>#container</h3>
    <lay-flex class="container" column auto-span>
      <header style="line-height: 60px">header</header>
      <lay-flex auto-span>
        <aside>aside</aside>
        <lay-flex column auto-span>
          <lay-flex>container</lay-flex>
          <footer>footer</footer>
        </lay-flex>
      </lay-flex>
    </lay-flex>
  </div>
</template>

<style scoped lang="scss">
.group {
  margin-bottom: 40px;

  & > .flex,
  & > .inline-flex {
    background-color: #f9f9f9;
    padding: 10px;
  }

  &.group-content {
    & > .flex {
      min-height: 120px;
    }
  }
}

.container {
  background-color: #f9f9f9;
  width: 100%;
  height: 40vh;

  aside {
    width: 300px;
  }
}
</style>
