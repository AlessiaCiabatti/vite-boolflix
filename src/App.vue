<script>
import Header from './components/Header.vue';
import CardContainer from './components/CardContainer.vue';
import Background from './components/Background.vue';

// store
import {store} from './assets/data/store';
import axios from 'axios';

  export default {
    components:{
      Header,
      CardContainer,
      Background,
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
  <Background v-if="store.movie.length == 0" />
</template>


<style lang="scss">
@use './assets/scss/main.scss';
</style>
