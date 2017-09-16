<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
import Main from '@/components/Layout/Main';

export default {
  name: 'app',
  components: {
    'main-page': Main
  }
};
</script>
