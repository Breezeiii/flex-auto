<template>
    <div :class="_class">
      <slot />
    </div>
  </template>
  
  <script setup>
  import { computed, inject, provide, toRef } from "vue";
  
  defineOptions({ name: "LayFlex" });
  
  const props = defineProps({
    inline: { type: Boolean, default: false },
    span: { type: [Number, String], default: null },
    stretch: { type: Boolean, default: false },
    column: { type: Boolean, default: false },
    wrap: { type: Boolean, default: false },
  
    justify: String,
    align: String,
    alignContent: String,
    alignSelf: String,
  
    autoSpan: { type: Boolean, default: false }
  });
  
  const autoSpan = toRef(props, "autoSpan");
  provide("autoSpan", autoSpan);
  
  const parentAutoSpan = inject("autoSpan", false);
  
  const colSpan = computed(() => {
    return parentAutoSpan.value ? 1 : props.span;
  });
  
  const _class = computed(() => {
    return {
      [`lay-flex${props.inline?'__inline':''}`]: true,
      [`lay-flex-${colSpan.value}`]: colSpan.value,
      ["is-stretch"]: props.stretch,
      ["is-column"]: props.column,
      ["is-wrap"]: props.wrap,
  
      [`justify-${props.justify}`]: props.justify,
      [`align-${props.align}`]: props.align,
      [`align-content-${props.alignContent}`]: props.alignContent,
      [`align-self-${props.alignSelf}`]: props.alignSelf
    };
  });
  </script>
  
  <style scoped lang="scss">
  @import "../style/flex.scss";
  
  $namespace: lay-flex;
  
  .#{$namespace} {
    display: flex;
  }
  .#{$namespace}__inline {
    display: inline-flex;
  }
  
  .#{$namespace},
  .inline-#{$namespace} {
    &:not(.is-stretch) {
      min-width: 0;
      min-height: 0;
    }
  
    &.is-inline {
      display: inline-flex;
    }
  
    &.is-column {
      flex-direction: column;
    }
  
    &.is-wrap {
      flex-wrap: wrap;
    }
  }
  
  @for $i from 1 through 24 {
    .#{$namespace}-#{$i} {
      flex: $i;
    }
  }
  </style>
  