<template>
<nav class="nav has-shadow" id="top">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item">
        <img src="http://bulma.io/images/bulma-logo.png" alt="Description">
      </a>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu">
      <router-link to="/" class="nav-item is-tab">
        Home
      </router-link>
      <router-link to="/test" class="nav-item is-tab">
        Test
      </router-link>
    </div>
  </div>
</nav>
</template>
<script>
export default {
  mounted() {
    const burger = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }
};
</script>
