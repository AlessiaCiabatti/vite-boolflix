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
      <div class="card-body text-white">

        <div class="img-container">

          <div class="card_text">
              <!-- serie tv hanno 'nome', film hanno 'titolo' allora se voglio stampare una delle due proprietà uso || -->
            <div class="mt-4 mx-3">
              <div class="mb-4">
                <h5 class="card-title mb-3"><span>TITOLO:</span> {{cardObj.title || cardObj.name}}</h5>
                <h6 class="card-subtitle"><span>TITOLO ORIGINALE:</span> {{ cardObj.original_title || cardObj.name}}</h6>
              </div>
              <div class="overview mb-4">
                <p>{{ cardObj.overview }}</p>
              </div>
              <div v-if="cardObj.original_language === 'en'">
                <img class="flag" src="../../assets/img/en.png" alt="">
              </div>
              <div v-else-if="cardObj.original_language === 'it'">
                <img class="flag" src="../../assets/img/it.png" alt="">
              </div>
              <div v-else>
                <p class="card-text">{{cardObj.original_language}}</p>
              </div>
              <div class="mt-3">
                <strong class="me-2">VOTO:</strong>
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

          <img class="img-cover" :src="this.store.imgUrlBase + cardObj.poster_path" alt="Image">

        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss">

@use '../../assets/scss/partials/variables' as *;

.card.card.mb-3{
  height: 430px;
  overflow: hidden;
  border-radius: 5px;
  border: none;
  .card-body {
    padding: 0px;
    .img-container{
      position: relative;
      .img-cover{
      width: 100%;
      height: 430px;
      object-fit: cover;
      }
    }
    .card_text{
      text-align: left;
      background-color: $bg-hover;
      position: absolute;
      width: 100%;
      height: 430px;

      .overview{
        overflow: auto;
        height: 130px;
        font-size: 0.8rem;
        &::-webkit-scrollbar {
          /* Hide scrollbar for Chrome, Safari and Opera */
          display: none;
        }
      }
      span{
        font-weight: bold;
      }
      h5.card-title.mb-3 {
      font-weight: 300;
      }
      h6.card-subtitle{
        color: $text-color;
        font-size: 0.8rem;
      }
      .flag{
        height: 25px;
      }
    } 
}
}

</style>