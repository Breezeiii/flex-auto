<template>
  <div
    :class="[
      'lay-col',
      span && `lay-col-${span}`,
      xl && `lay-col-xl-${xl}`,
      lg && `lay-col-lg-${lg}`,
      md && `lay-col-md-${md}`,
      sm && `lay-col-sm-${sm}`,
      xs && `lay-col-xs-${xs}`,

      offset && `lay-col-offset-${offset}`,
      pull && `lay-col-pull-${pull}`,
      push && `lay-col-push-${push}`,
      order && `lay-col-order-${order}`,

      align && `align-self-${align}`
    ]"
    :style="style"
  >
    <slot /> {{ gutter }}
  </div>
</template>

<script setup>
import { computed, inject } from "vue";

defineOptions({ name: "LayCol" });

const props = defineProps({
  span: { type: [Number, String], default: null },
  xs: { type: [Number, String], default: null },
  sm: { type: [Number, String], default: null },
  md: { type: [Number, String], default: null },
  lg: { type: [Number, String], default: null },
  xl: { type: [Number, String], default: null },

  offset: { type: [Number, String], default: null },
  pull: { type: [Number, String], default: null },
  push: { type: [Number, String], default: null },
  order: { type: [Number, String], default: null },

  align: String
});

const gutter = inject("gutter");

const style = computed(
  () =>
    gutter.value && {
      paddingLeft: `${gutter.value / 2}px`,
      paddingRight: `${gutter.value / 2}px`
    }
);
</script>

<style scoped lang="scss">
@use "sass:math";

@import "../style/var.scss";
@import "../style/flex.scss";

$namespace: lay-col;

@mixin col-size($size) {
  @include res($size) {
    @for $i from 1 through 24 {
      .#{$namespace}-#{$size}-#{$i} {
        max-width: getColWidth($i);
        flex: 0 0 getColWidth($i);
      }

      .#{$namespace}-#{$size}-offset-#{$i} {
        margin-left: getColWidth($i);
      }

      .#{$namespace}-#{$size}-pull-#{$i} {
        position: relative;
        right: getColWidth($i);
      }

      .#{$namespace}-#{$size}-push-#{$i} {
        position: relative;
        left: getColWidth($i);
      }
    }
  }
}

.#{$namespace} {
  &[class*="#{lay-col}-"] {
    box-sizing: border-box;
  }
}

@function getColWidth($i) {
  @return (math.div(1, 24) * $i * 100) * 1%;
}

@for $i from 1 through 24 {
  .#{$namespace}-#{$i} {
    max-width: getColWidth($i);
    flex: 0 0 getColWidth($i);
  }

  .#{$namespace}-offset-#{$i} {
    margin-left: getColWidth($i);
  }

  .#{$namespace}-pull-#{$i} {
    position: relative;
    right: getColWidth($i);
  }

  .#{$namespace}-push-#{$i} {
    position: relative;
    left: getColWidth($i);
  }
}

@include col-size(xs);
@include col-size(sm);
@include col-size(md);
@include col-size(lg);
@include col-size(xl);
</style>
