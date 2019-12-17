<template>
  <div>
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import Footer from './components/Footer.vue'
export default {
  components: {
    Footer
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style style='css'>
  h1,body,ul,p,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  html{
    font-size: calc(100vw / 7.5);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif,'Microsoft Yahei';
  }
  body{
    font-size: 0.25rem;
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
