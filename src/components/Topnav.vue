<template>
  <div>
    <div class="topnav">
      <router-link ref="topLogo" to="/" class="logo">
        <svg class="icon">
          <use xlink:href="#icon-pao"></use>
        </svg>
      </router-link>
      <ul class="menu">
        <li>
          <router-link to="/doc">文档</router-link>
        </li>
      </ul>
      <svg @click="toggleMenu" class="toggleAside icon">
        <use xlink:href="#icon-liebiao" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };

    return {
      toggleMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  // padding: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #ffffff;
  border-bottom: 1px solid #edeceb;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    margin-left: 100px;

    > svg {
      width: 48px;
      height: 48px;
      transition: all 0.6s;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    margin-right: 100px;
    > li {
      margin: 0 1em;
      color: #0095ff;

      a {
        font-size: 20px;
        transition: all 0.6s;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  > .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    position: fixed;
    // padding: 0;
    padding-top: 5px;
    // background-color: #edeceb;
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
      > svg {
        width: 2.2em;
        height: 2.2em;
      }
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>