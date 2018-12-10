<template>
  <div id="app">
    <MainFoundation v-if="getRoute==='home'" />
    <JobSearch v-else-if="getRoute==='job-search'" />
    <About v-else-if="getRoute==='about'" />
    <Resources v-else-if="getRoute==='resources'" />
    <Mentorship v-else-if="getRoute==='mentorship'" />
  </div>
</template>

<script>
import MainFoundation from '@/components/main/main-foundation';
import JobSearch from '@/components/job-search/job-search-foundation';
import About from '@/components/about/about-foundation';
import Resources from '@/components/resources/resources-foundation';
import Mentorship from '@/components/mentorship/mentorship-foundation';

export default {
  name: 'app',
  components: {
    MainFoundation,
    JobSearch,
    About,
    Resources,
    Mentorship,
  },
  computed: {
    getRoute() {
      return this.$store.getters.getNav;
    }
  }
}
</script>

<style>
body, html {
  height: 100%;
}
body {
  margin: 0;
  background: #cdcdcd;
  height: 100%;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #ccc;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #ccc;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #ccc;
}
:-moz-placeholder { /* Firefox 18- */
  color: #ccc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100%;
  position: relative;
}
.centered-div {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.centered-text {
  text-align: center;
}
.padding-50 {
  padding: 50px;
}
.busy {
  font-style: italic;
}

</style>
