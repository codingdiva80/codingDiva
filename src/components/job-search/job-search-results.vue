<template>
  <div>
    <div v-if="showSearching" class="busy">...searching, please wait</div>
    <div v-else class='search-list-container'>
      <p>{{ getNumResults }} Results for {{ searchCriteria }} in {{ searchLocation }} </p>
      <ul id='search-list'>
        <li v-for="item in getData" :key="item.id">
          <b>{{ item.title }}</b><br />
          {{ item.description }}<br />
          <a @click="openLink(item.source)">{{item.source}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'JobSearchResults',
  data(){
    return {
      searchCriteria: this.$store.state.JobSearch.searchCriteria,
      searchLocation: this.$store.state.JobSearch.searchLocation,
      searchInProgress: true,
      results: [],
      num: 0,
    }
  },
  mounted(){
    this.doSearch();
  },
  methods: {
    doSearch(){
      const endPoint = this.$store.state.Config.API;
      const queryString = `/jobs?location=${this.searchLocation}&criteria=${this.searchCriteria}`;
      fetch(endPoint + queryString)
        .then(response => response.json())
        .then(data => {
          this.searchInProgress = false;
          this.num = data.length;
          this.results = data;
        });
    },
    openLink(link){
      window.open(link);
    }
  },
  computed: {
    showSearching() {
      return this.searchInProgress;
    },
    getData() {
      return this.results;
    },
    getNumResults(){
      return this.num;
    }
  }
}
</script>

<style lang='scss'>
  .search-list-container {
    margin: 0 auto;
    width: 900px;
  }
  #search-list {
    list-style: none;
    text-align: left;

    li {
      text-align: left;
    }
  }
</style>