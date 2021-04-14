
<template>
  <global-header />
  <router-view />
  <global-footer />
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import './assets/css/style.css';


  export default {
    components:{
      'global-header':Header,
      'global-footer':Footer
    }
  }
</script>