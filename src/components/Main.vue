<script>
import CardMovie from './partials/CardMovie.vue';

// stoe
import { store } from '../assets/data/store';

  export default {
    components:{
      CardMovie,
    },

    data(){
      return{
        store,
      }
    }
  }
</script>



<template>
  <div class="container">
    <div class="row row-col-3">
      <CardMovie v-for="movie in this.store.movieList" 
      :key="movie.id"
      :title="movie.title"
      :originalTitle="movie.original_title"
      :originalLanguage="movie.original_language"
      :voteAverage="movie.vote_average.toFixed(1)"/>
    </div>
  </div>

</template>


<style lang="scss">

</style>