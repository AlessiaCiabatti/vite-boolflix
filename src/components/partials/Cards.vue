<script>
import { store } from '../../assets/data/store';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

  export default {
    props:{
      // passo tutto l'oggetto perchè serie tv hanno 'nome', film hanno 'titolo'
      cardObj: Object,
    },
    data(){
      return{
        store,
      }
    },
    methods:{
      voteStar(){
        return Math.ceil(this.cardObj.vote_average / 2)
      }
    },
   
  }
</script>


<template>
 
  <div class="col">
    <div class="card card mb-3" style="width: 18rem;">
      <div class="card-body">
        <div>
          <img :src="this.store.imgUrlBase + cardObj.poster_path" alt="Image">
        </div>
        <!-- serie tv hanno 'nome', film hanno 'titolo' allora se voglio stampare una delle due proprietà uso || -->
        <h4 class="card-title">{{cardObj.title || cardObj.name}}</h4>
        <h5 class="card-subtitle mb-2 text-body-secondary">{{ cardObj.original_title || cardObj.name}}</h5>
        <div v-if="cardObj.original_language === 'en'">
          <img src="../../assets/img/en.png" alt="">
        </div>
        <div v-else-if="cardObj.original_language === 'it'">
          <img src="../../assets/img/it.png" alt="">
        </div>
        <div v-else>
          <p class="card-text">{{cardObj.original_language}}</p>
        </div>
        <div>
          <i v-for="n in voteStar()" :key="n" class="fa-solid fa-star"></i>
        <i
          v-for="n in 5 - voteStar()"
          :key="n"
          class="fa-regular fa-star">
        </i>
        </div>
        <p class="card-text">{{cardObj.vote_average.toFixed(1)}}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.card{
  img{
    height: 50px;
  }
}

</style>