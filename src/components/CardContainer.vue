<script>
import Cards from './partials/Cards.vue';

// stoe
import { store } from '../assets/data/store';

  export default {
   
    components:{
      Cards,
    },

    props:{
      type: String,
    },

    data(){
      return{
        store,
      }
    },
    computed:{
      title(){
        return this.type === 'Movie' ? 'Film' : 'Serie TV'
      }
    }
  }
</script>



<template>
  <div class="container text-center">
    <h3>{{ title }}</h3>
    <div class="row row-col-4">
      <!-- passo tutto l'oggetto perchè serie tv hanno 'nome', film hanno 'titolo' -->
      <Cards v-for="item in this.store[type]" :key="item.id" :cardObj="item"
                :title="item.title"
                :originalTitle="item.original_title"
                :originalLanguage="item.original_language"
                :voteAverage="item.vote_average.toFixed(1)"/>
    </div>
  </div>

</template>


<style lang="scss">

</style>