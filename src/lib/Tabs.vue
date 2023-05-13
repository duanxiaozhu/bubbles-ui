<template>
  <div class="bubbles-tabs">
    <div class="bubbles-tabs-nav" ref="container">
      <div
        class="bubbles-tabs-nav-item"
        @click="select(t)"
        :ref="
          (el) => {
            if (t.title === selected) selectedItem = el;
          }
        "
        :class="{ selected: t.title === selected ,'bubbles-tabs-nav-disabled':t.disabled}"
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t.title }}
      </div>
      <div class="bubbles-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="bubbles-tabs-content">
      <component
        class="bubbles-tabs-content-item"
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        const { width } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px";
      });
    });
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子组件必须是Tab");
      }
    });
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected);
    });
    const select = (t: { title: string; disabled: boolean }) => {
      if (!t.disabled) {
        context.emit("update:selected", t.title);
      }
    };
    const titles = defaults.map((tag) => {
      if (tag.props.disabled || tag.props.disabled === "") {
        return {
          title: tag.props.title,
          disabled: true,
        };
      } else {
        return {
          title: tag.props.title,
          disabled: false,
        };
      }
    });
    return {
      defaults,
      titles,
      current,
      select,
      indicator,
      container,
      selectedItem,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.bubbles-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
      &.bubbles-tabs-nav-disabled {
        color: #ccc;
        cursor: not-allowed;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>