<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default {
  name: 'App'
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  html{
    font-size: 10px;
  }
</style>
