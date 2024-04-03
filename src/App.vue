<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

// store
import {store} from './assets/data/store';
import axios from 'axios';

  export default {
    components:{
      Header,
      Main,
      Footer,
    },
    
    data(){
      return{
        store,
      }
    },
    methods:{
      getApiMovie(){
        axios.get(this.store.apiUrlMovie)
        .then(result =>{
          console.log(result.data.results);
          this.store.movieList = result.data.results;
          console.log(this.store.movieList);
        })
      }
    },

    mounted(){
      this.getApiMovie()
    }
  }
</script>


<template>
  <Header />
  <Main />
  <Footer />
</template>


<style lang="scss">
@use './assets/scss/main.scss';
</style>
