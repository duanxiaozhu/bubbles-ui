<template>
  <div>导航栏|
  <router-link to='/'>shanzhu</router-link>|
  <router-link to="/xxx">shanzhu2</router-link>
  </div>

  <hr/>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
