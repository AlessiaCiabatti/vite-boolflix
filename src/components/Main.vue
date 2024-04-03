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
      <CardMovie v-for="movie in this.store.movieList" />
    </div>
  </div>

</template>


<style lang="scss">

</style>