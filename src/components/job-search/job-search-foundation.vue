<template>
  <div>
    <MainHeader />
    <div class='centered-div centered-text padding-50'>
      <div class='search-heading'>
        <h1>Search Jobs</h1>
      </div>
      
      <div class='search-inputs-container'>
        <div class='col'>
          <div class='search-icon'></div>
          <div class='search-input-container'>
            <input type='text' class='search-input' placeholder='Job keyword' v-model="searchCriteria" />
            <datalist id="datalist-locations" />
          </div>
        </div>
        <div class='col'>
          <div class='location-icon'></div>
          <div class='search-location-container'>
            <input type='text' 
              class='search-input' 
              placeholder='Location' 
              @keyup="getLocations"  
              id="location-search" 
              v-model="searchLocation"  
            />
            <datalist id="datalist-locations" />
          </div>
        </div> 
        <div class='col'>
          <a class='search-button' @mousedown="clearSearch" @mouseup="doSearch">Search</a>
        </div>         
      </div>
      
      <div>
        <job-search-results v-if="searching" />
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script>
  import MainHeader from '@/components/main/main-header';
  import MainFooter from '@/components/main/main-footer';
  import cities from '@/assets/data/usaCities';
  import JobSearchResults from './job-search-results';
  import { SET_JOB_SEARCH } from '@/store/mutation-types';

  export default {
    name: 'JobSearch', 
    components: {
      MainHeader,
      MainFooter,
      JobSearchResults,
    },
    data() {
      return {
        minLength: false,
        searchCriteria: '',
        searchLocation: '',
      }
    },
    methods: {
      getLocations($event){
        const locationSearch = document.querySelector('#location-search');
        const value = $event.target.value;
        if(value.length > 3){
          locationSearch.setAttribute('list', 'datalist-locations');
        }
        else { 
          locationSearch.setAttribute('list', null);
         }
      },
      populateLocationsList(){
        let dataList = document.querySelector('#datalist-locations');
        cities.forEach(item => {
          const option = document.createElement('option');
          option.value = `${item.city}, ${item.state}`;
          dataList.appendChild(option);
        })
      },
      clearSearch(){
        this.$store.commit(SET_JOB_SEARCH, { isSearching: false });
      },
      doSearch(){
        this.$store.commit(SET_JOB_SEARCH, {
          isSearching: true,
          searchCriteria: this.searchCriteria,
          searchLocation: this.searchLocation
        });
      },
    },
    mounted() {
      this.populateLocationsList();
    },
    computed: {
      searching(){
        return this.$store.state.JobSearch.isSearching
      }
    },
  }
</script>

<style lang='scss'>
  .search-heading {
    h1 {
      font-size: 3.0em;
      color: #565656;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
  .col {
    flex: 1;
  }
  .search-inputs-container {
    width: 900px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 56px;
    margin: 0 auto;
    display: flex;
  }
  .search-icon {
    background-image: url('../../assets/images/search.png');
    background-position:0 0;
    width: 32px;
    height: 32px;
    margin-top:10px;
    margin-left:10px;
    display: inline-block;
  }

  .location-icon {
    background-image: url('../../assets/images/search.png');
    background-position:0px -114px;
    width: 32px;
    height: 36px;
    margin-top:10px;
    margin-left:10px;
    display: inline-block;
  }

  .search-input-container {
    width: calc(100% - 50px);
    height: 40px;
    background: #fff;
    border: 0;
    position: relative;
    display: inline-block;
  }

  .search-input {
    width: calc(100% - 10px);
    height: 36px;
    font-size: 1.3em;
    padding: 0;
    margin: 0;
    outline-style: none;
    border: none;
    color: #565656;
    position: absolute;
    top: 5px;
    left: 5px;
    display: inline-block;
  }

  .search-location-container {
    width: calc(100% - 50px);
    height: 40px;
    background: #fff;
    border: 0;
    position: relative;
    display: inline-block;
  }

  .search-button {
    height: 56px;
    border: 0;
    background: #04cc0a;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    display:flex;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background:#2efa35;
    }
  }

  @media screen and (max-width:576px) {
    .search-inputs-container {
      width: 100%;
      background: red;
      display: block;
    }
    .search-input-container {
      width: calc(100% - 50px);
      display: block;
    }
    .search-location-container {
      width: calc(100% - 50px);
      display: block;
    }
  }
</style>

