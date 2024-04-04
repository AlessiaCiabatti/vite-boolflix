
<script>
import { store } from '../../assets/data/store';

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
   
  }
</script>


<template>
 
  <div class="col mt-5">
    <div class="card text-center" style="width: 18rem;">
      <div class="card-body">
        <!-- serie tv hanno 'nome', film hanno 'titolo' allora se voglio stampare una delle due proprietà uso || -->
        <h4 class="card-title">{{cardObj.title || cardObj.name}}</h4>
        <h5 class="card-subtitle mb-2 text-body-secondary">{{ cardObj.originalTitle || cardObj.name}}</h5>
        <p>{{cardObj.originalLanguage}}</p>
        <p>{{cardObj.voteAverage}}</p>
        <!-- <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>