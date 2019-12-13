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
  }
  html{
    font-size: calc(100vw / 7.5);
  }
  body{
    font-size: 0.25rem;
  }
</style>
