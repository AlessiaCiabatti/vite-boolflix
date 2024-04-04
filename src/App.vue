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
      startSearch(){
        this.getApi('movie');
        this.getApi('tv');
      }
    },

    mounted(){
      this.startSearch()
    }
  }
  
</script>


<template>
  <Header @startSearch="startSearch"/>
  <CardContainer type="movie" v-if="store.movie.length > 0" />
  <CardContainer type="tv" v-if="store.tv.length > 0"/>
  <Footer />
</template>


<style lang="scss">
@use './assets/scss/main.scss';
</style>
