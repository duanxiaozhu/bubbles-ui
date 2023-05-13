<demo>
一键打开
</demo>
<template>
  <Button @click="showDialog">toggle</Button>
</template>

<script lang="ts">
import{ Button }from "../../lib/index";
import { openDialog } from "../../lib/openDialog";
import { h } from "vue";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
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
    return {
      showDialog,
    };
  },
};
</script>