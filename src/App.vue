<template>
  <h3>row</h3>
  <flex justify="space-between">
    <flex :span="1">1</flex>
    <flex :span="2">2</flex>
    <flex :span="1">3</flex>
  </flex>
  <br />
  <h3>column</h3>
  <flex direction="column-reverse">
    <flex :span="1">1</flex>
    <flex :span="2">2</flex>
    <flex :span="1">3</flex>
  </flex>
  <h3>justify="space-between"</h3>
  <flex justify="space-between" align="center" wrap="wrap">
    <flex>1</flex>
    <flex>2</flex>
    <flex>3</flex>
  </flex>
</template>

<script setup></script>

<style scoped lang="scss"></style>
