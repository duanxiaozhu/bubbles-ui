<template>
  <div class="homeWrap">
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>泡泡UI</h1>
        <h2>一个普普通通的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/duanxiaozhu/bubbles-ui">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-v"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-Ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-prompt"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";

export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
$bg-pink: #0095ff;
$font-color: #ffffff;
$border-radius: 8px;
.homeWrap {
  overflow-y: auto;
}
.features {
  margin: 32px auto 100px;
  padding: 0 30px;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > li {
      margin: 16px 0;
      display: flex;
      width: 300px;
      padding: 0 40px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      > svg {
        width: 64px;
        height: 64px;
      }
      > h3 {
        font-size: 1.5em;
      }
      > p {
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
.banner {
  padding: 70px 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    145deg,
    rgba(236, 253, 255, 1) 0%,
    rgba(187, 227, 255, 1) 100%
  );
  clip-path: ellipse(75% 60% at 50% 40%);
  > h2 {
    margin: 30px 0;
  }
  @media (max-width: 500px) {
    padding-top: 50px + (2.2 * 16px);
    padding-bottom: 16px;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 15px;
      background: $bg-pink;
      display: inline-block;
      color: $font-color;
      padding: 8px 24px;
      border-radius: $border-radius;
      transition: all 0.6s;
      &:hover {
        text-decoration: none;
        opacity: 0.7;
      }
    }
  }
}
</style>
