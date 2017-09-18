import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Test from '@/components/Test';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});
