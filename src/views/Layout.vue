<template>
  <div style="padding: 15px">
    <h3>#基础布局</h3>
    <lay-row>
      <lay-col
        xl="3"
        lg="4"
        md="6"
        sm="8"
        xs="12"
        v-for="item in arr"
        :key="item"
      >
        <div class="grid-content">{{ item + 1 }}</div>
      </lay-col>
    </lay-row>
    <h3>#分栏间隔</h3>
    <lay-row :gutter="20">
      <lay-col span="3" v-for="item in arr" :key="item">
        <div class="grid-content">{{ item + 1 }}</div>
      </lay-col>
    </lay-row>
    <h3>#列偏移</h3>
    <lay-row>
      <lay-col span="4" v-for="item in 3" :key="item">
        <div class="grid-content">{{ item }}</div>
      </lay-col>
      <lay-col span="4" offset="4">
        <div class="grid-content">5</div>
      </lay-col>
      <lay-col span="4">
        <div class="grid-content">6</div>
      </lay-col>
    </lay-row>
    <h3>#对齐方式 justify</h3>
    <lay-row>
      <lay-col span="6" v-for="item in 3" :key="item">
        <div class="grid-content">{{ item }}</div>
      </lay-col>
    </lay-row>
    <lay-row justify="flex-end">
      <lay-col span="6" v-for="item in 3" :key="item">
        <div class="grid-content">{{ item }}</div>
      </lay-col>
    </lay-row>
    <lay-row justify="center">
      <lay-col span="6" v-for="item in 3" :key="item">
        <div class="grid-content">{{ item }}</div>
      </lay-col>
    </lay-row>
    <lay-row justify="space-around">
      <lay-col span="6" v-for="item in 3" :key="item">
        <div class="grid-content">{{ item }}</div>
      </lay-col>
    </lay-row>
    <lay-row justify="space-between">
      <lay-col span="6" v-for="item in 3" :key="item">
        <div class="grid-content">{{ item }}</div>
      </lay-col>
    </lay-row>
    <h3>#对齐方式 align-content</h3>
    <lay-row style="height: 300px" align-content="space-around">
      <lay-col span="6" v-for="item in 10" :key="item">
        <div class="grid-content">{{ item }}</div>
      </lay-col>
    </lay-row>
    <h3>#对齐方式 align</h3>
    <lay-row style="height: 300px" align="center">
      <lay-col
        span="6"
        v-for="item in 4"
        :key="item"
        :align="item == 2 ? 'flex-start' : ''"
      >
        <div class="grid-content">{{ item }}</div>
      </lay-col>
    </lay-row>

    <h3>hidden-md-and-down</h3>
    <lay-row class="hidden-md-and-down">
      <lay-col
        span="6"
        v-for="item in 4"
        :key="item"
        :align="item == 2 ? 'flex-start' : ''"
      >
        <div class="grid-content">{{ item }}</div>
      </lay-col>
    </lay-row>

    <h3>push & pull</h3>
    <lay-row>
      <lay-col span="6" push="6">
        <div class="grid-content">push</div>
      </lay-col>
      <lay-col span="6" offset="12" pull="6">
        <div class="grid-content">pull</div>
      </lay-col>
    </lay-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const arr = ref(Array.from({ length: 8 }, (val, key) => key));
</script>

<style scoped lang="scss">
h3 {
  margin-bottom: 10px;
}
.grid-content {
  line-height: 40px;
  background-color: #f9f9f9;
}

.lay-row {
  margin-bottom: 15px;
}
</style>
