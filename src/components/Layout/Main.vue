<template>
<div id='main-container'>
  <header-page></header-page>
  <router-view></router-view>
  <footer-page></footer-page>
</div>
</template>
<script>
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

export default {
  name: 'main-page',
  components: {
    'header-page': Header,
    'footer-page': Footer
  }
};
</script>
