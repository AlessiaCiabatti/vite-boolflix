<script>
import Header from './components/Header.vue';
import CardContainer from './components/CardContainer.vue';
import Footer from './components/Footer.vue';

// store
import {store} from './assets/data/store';
import axios from 'axios';

  export default {
    components:{
      Header,
      CardContainer,
      Footer,
    },
    
    data(){
      return{
        store,
      }
    },
    methods:{
      getApi(type){
        axios.get(this.store.apiUrl + type, {
          params: store.queryParams
        })
        .then(result =>{
          // console.log(result.data.results);
          this.store[type] = result.data.results;
          console.log(this.store[type]);
          
        })
      },
      // getApiSeries(){
      //   axios.get(this.store.apiUrlMovie + 'tv', {
      //     params: store.queryParams
      //   })
      //   .then(result =>{
      //     console.log(result.data.results);
      //     this.store.movieList = result.data.results;
      //     console.log(this.store.movieList);
          
      //   })
      // },
    },

    mounted(){
      this.getApi('movieList');
      this.getApi('movieSeries');
    }
  }
  
</script>


<template>
  <Header @startSearch="getApi('movieList')"/>
  <CardContainer type="movie" />
  <CardContainer type="tv" />
  <Footer />
</template>


<style lang="scss">
@use './assets/scss/main.scss';
</style>
