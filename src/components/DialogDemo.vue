<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
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
  <h1>示例2</h1>
  <Button @click="showDialog">toggle</Button>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
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
    const showDialog = () => {
      openDialog({
        title: "提示",
        content: "你好",
        closeOnClickOverlay: false,
        ok() {
          console.log("ok");
          
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { visible, toggle, f1, f2, showDialog };
  },
};
</script>