<demo>
基本
</demo>

<template>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <div>泡泡</div>
      <div>UI</div>
    </template>
    <template v-slot:title>
      <strong>这是一个提示</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import {Dialog} from "../../lib/index";
import {Button} from "../../lib/index";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {};
    return { visible, toggle, f1, f2 };
  },
};
</script>