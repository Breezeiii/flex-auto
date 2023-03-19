<template>
  <div
    :class="{
      ['lay-row']: true,
      [`justify-${justify}`]: justify,
      [`align-${align}`]: align,
      [`align-content-${alignContent}`]: alignContent
    }"
    :style="style"
  >
    <slot />
  </div>
</template>

<script setup>
import { provide, computed, watch, watchEffect, toRef } from "vue";

defineOptions({ name: "LayRow" });

const props = defineProps({
  gutter: { type: [String, Number], default: null },
  justify: String,
  align: String,
  alignContent: String
});

const gutter = toRef(props, "gutter");
provide("gutter", gutter);

const style = computed(
  () =>
    gutter.value && {
      marginLeft: `-${gutter.value / 2}px`,
      marginRight: `-${gutter.value / 2}px`
    }
);
</script>

<style scoped lang="scss">
@import "../style/flex.scss";

$namespace: lay-row;

.#{$namespace} {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
}
</style>
