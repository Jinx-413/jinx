<template>
  <div id="app">
    <Header v-if="$root.bHeader"/>
    <router-view></router-view>
    <Footer v-if="$root.bFooter"/>
    <!-- <Login/> -->
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  export default {
    name: 'App',
    components: {
      Header,Footer
    },
    watch: {
      $route: {
        deep: true,
        immediate: true,
        handler(val, oldVal) {          
          let path = val.path;
          
          if(/home/.test(path)){//home follow column
            this.$root.bHeader=this.$root.bFooter=true;
          }
          
          if(/login/.test(path)){//detial login reg
            this.$root.bHeader=this.$root.bFooter=false;
          }
          
          if(/user|order|look/.test(path)){//user path.includes('/user')
            this.$root.bHeader=false;
            this.$root.bFooter=true;
          }
        },
      },
    }
}
</script>

<style>
  #app{display: flex;flex-flow:column;background:#f7f7f7;height:100%;}
</style>
