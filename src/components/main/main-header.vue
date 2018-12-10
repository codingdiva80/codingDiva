<template>
  <div id='header-main'>
    <div id='header-container'>
      <div id='logo'>
        <img src="@/assets/images/logo.svg" alt="logo" width="200" height="50" @click="nav('home')" />
      </div>
      <div id='menu-container'>
        <ul>
          <li @click="nav('job-search')">Search Jobs</li>
          <li @click="nav('mentorship')">Mentorship</li>
          <li @click="nav('resources')">Resources</li>
          <li @click="nav('about')">About</li>
          <li @click="nav('login')">Login</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { SET_NAV } from '@/store/mutation-types';

export default {
  name: 'main-header',
  methods: {
    nav(url) {
      history.pushState(null, '', `${url}`);
      this.$store.commit(SET_NAV, { url });
    }
  }
}
</script>

<style lang="scss" scoped>
  #header-main {
    background: rgba(0, 0, 0, .4);
    padding: 0, 10, 0, 10;
    min-height: 60px;
  }
  #header-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  #logo {
    padding-top:.2em;

    img {
      cursor: pointer;
    }
  }
  #welcome {
    position: fixed;
  }
  #menu-container {
    ul {
      list-style: none;
    }
    li {
      display: inline-block;
      margin-right: 1.5em;
      color: white;
      font-size: 1.5em;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
    
  }
</style>

