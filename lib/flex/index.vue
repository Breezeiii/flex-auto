<template>
  <div
    :class="[
      'flex',
      span && `flex-${span}`,
      direction && `direction-${direction}`,
      justify && `justify-${justify}`,
      align && `align-${align}`,
      wrap && `${wrap}`,
      alignContent && `align-content${alignContent}`
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
defineOptions({ name: "Flex" });

const props = defineProps({
  display: { type: String, default: "flex" },
  span: { type: [Number, String], default: null },

  direction: String,
  justify: String,
  align: String,
  wrap: String,
  alignContent: String
});
</script>

<style scoped lang="scss">
$name: flex;

.#{$name} {
  display: flex;

  & {
    min-width: 0;
    min-height: 0;
  }
}

@for $i from 1 through 24 {
  .#{$name}-#{$i} {
    flex: $i;
  }

  // [order="#{$i}"] {
  //   order: $i;
  // }
}

$direction: (row, row-reverse, column, column-reverse);
@for $item from 1 through length($direction) {
  .direction-#{nth($direction ,$item)} {
    flex-direction: nth($direction, $item);
  }
}

$wrap: (nowrap, wrap, wrap-reverse);
@for $item from 1 through length($wrap) {
  .#{nth($wrap ,$item)} {
    flex-wrap: nth($wrap, $item);
  }
}

$justify: (flex-start, flex-end, center, space-between, space-around);
@for $item from 1 through length($justify) {
  .justify-#{nth($justify ,$item)} {
    justify-content: nth($justify, $item);
  }
}

$align: (stretch, center, flex-start, flex-end, baseline);
@for $item from 1 through length($align) {
  .align-#{nth($align ,$item)} {
    align-items: nth($align, $item);
  }

  .#{name}-align-self-#{nth($align ,$item)} {
    align-self: nth($align, $item);
  }
}

$align-content: (
  stretch,
  center,
  flex-start,
  flex-end,
  space-between,
  space-around
);
@for $item from 1 through length($align-content) {
  .align-content-#{nth($align-content ,$item)} {
    align-content: nth($align-content, $item);
  }
}
</style>
