<template>
  <button
    class="bubbles-switch"
    @click="toggle"
    :class="classes"
    :disabled="disabled"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    value: {
      type: Boolean,
      // default: false,
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };

    const classes = computed(() => {
      const { value, size, disabled } = props;
      return {
        [`bubbles-switch-checked`]: value,
        [`bubbles-switch-size-${size}`]: size,
        [`bubbles-switch-disabled`]: disabled,
      };
    });
    return { toggle, classes };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.bubbles-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius:11px;
  position: relative;

  &.bubbles-switch-disabled {
    background: #e8e8e8;
    > span {
      background: #ffffff;
    }
  }
  &:focus {
    outline: none;
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius:11px;
    transition: 250ms;
  }
  &.bubbles-switch-checked {
    background: #1890ff;
  }
  &.bubbles-switch-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  // &:focus {
  //   outline: none;
  // }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.bubbles-switch-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
  &.bubbles-switch-size-big {
    width: $h * 3;
  }
  &.bubbles-switch-size-small {
    width: $h * 1.5;
    height: $h * 0.8;
    > span {
      width: $h2 * 0.7;
      height: $h2 * 0.7;
    }
    &.bubbles-switch-checked > span {
      left: calc(100% - #{$h2 * 0.7} - 2px);
    }
    &:active {
      > span {
        width: $h2;
      }
    }
  }
}
</style>