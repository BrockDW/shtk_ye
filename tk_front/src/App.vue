<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@font-face {
  font-family: "pingfang";
  src: url("./assets/fonts/pingfang.ttf");
}

body,
html,
#app {
  margin: 0;
  font-family: 'pingfang';
}

:focus {
  outline: none;
}
</style>
