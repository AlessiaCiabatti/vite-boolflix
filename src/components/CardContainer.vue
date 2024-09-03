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
        return this.type === 'movie' ? 'Film' : 'Serie TV'
      }
    }
  }
</script>



<template>
  <div class="bg">
    <div class="container text-center mt-5">
      <h3 class="text-white">{{ title }}</h3>
      <div class="row row-cols-4">
        <!-- passo tutto l'oggetto perchè serie tv hanno 'nome', film hanno 'titolo' -->
        <Cards class="mb-4" v-for="item in this.store[type]" :key="item.id" :cardObj="item"
                />
      </div>
    </div>
  </div>

</template>


<style lang="scss">

@use '../assets/scss/partials/variables' as *;

.container.text-center {
    max-width: 95%;
    h3{
      text-align: left;
    }
}
</style>