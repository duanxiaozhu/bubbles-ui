<demo>
不可用状态
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab disabled title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs, Tab} from "../../lib/index";
import { ref } from "vue";
export default {
  components: {
    Tab,
    Tabs,
  },
  setup() {
    const x = ref("导航1");
    return {
      x,
    };
  },
};
</script>