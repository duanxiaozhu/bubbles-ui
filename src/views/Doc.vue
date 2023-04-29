<template>
  <div class="layout">
    <Topnav toggleMenuVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <div>
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/introduce">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="get-started">快速上手</router-link>
            </li>
          </ol>

          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs组件</router-link>
            </li>
          </ol>
        </div>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
@import "../index.scss";
$padding-spacing: 200px;
.router-link-active {
  color: #c66844;
  background: #0095ff;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding: 0 40px 0 340px;
    display: flex;
    > aside {
      flex-shrink: 0;
      background: #ffffff;
      min-width: 300px;
      padding: 16px 0;
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 85px;
      height: 100%;
      border-right: 1px solid #edeceb ;
      z-index: 5;
      > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        > h2 {
          margin-bottom: 4px;
          padding-left: 16px;
        }
        > ol {
          > li {
            a {
              display: block;
              padding: 10px 32px;
              color: lighten($fontColor, 14%);
            }
          }
        }
      }
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      background: rgba($color: #ffffff, $alpha: 1);
      border-radius: 6px;
      overflow: auto;
    }
    @media (max-width: 500px) {
      padding: 44px 0 0 0;
      > aside {
        background: #f9f9f9;
        min-width: 50%;
      }
      > main {
        background: $bgColor;
      }
    }
  }
}
</style>