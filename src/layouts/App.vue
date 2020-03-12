<template>
  <div id="app">
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Home from '../pages/Home.vue';
  import Footer from './Footer.vue';
  export default {
    name: 'App',
    components: {
      Header,Footer,Home
    }
}
</script>

<style>
  #app{display: flex;flex-flow:column;background:#fff;height:100%;}
</style>
