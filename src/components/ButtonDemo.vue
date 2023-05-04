<template>
  <div>button示例</div>
  <h1>示例1</h1>
  <div>
    <Button >按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">Big</Button>
    <Button>Normal</Button>
    <Button size="small">Small</Button>
  </div>
  <div>
    <Button size="big" theme="link">Big Link</Button>
    <Button theme="link">Normal Link</Button>
    <Button size="small" theme="link">Small Link</Button>
  </div>
  <div>
    <Button size="big" theme="text">Big text</Button>
    <Button theme="text">Normal text</Button>
    <Button size="small" theme="text">Small text</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <Button level="main">Primary</Button>
    <Button>Default</Button>
    <Button level="danger">Danger</Button>
  </div>
  <div>
    <Button theme="link" level="main">Primary link</Button>
    <Button theme="link">Default link</Button>
    <Button theme="link" level="danger">Danger link</Button>
  </div>
  <div>
    <Button theme="text" level="main">Primary text</Button>
    <Button theme="text">Default text</Button>
    <Button theme="text" level="danger">Danger text</Button>
  </div>
  <h1>示例4</h1>
  <Button disabled>Disabled</Button>
  <Button theme="link" disabled>Disabled link</Button>
  <Button theme="text" disabled>Disabled text</Button>
  <h1>示例5</h1>
  <Button loading>Loading</Button>
  <Button @click="onClick" :loading="isLoading">Click me</Button>
</template>

<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const isLoading = ref(false);
    const onClick = () => {
      isLoading.value = !isLoading.value;
    };
    return {
      onClick,
      isLoading,
    };
  },
};
</script>