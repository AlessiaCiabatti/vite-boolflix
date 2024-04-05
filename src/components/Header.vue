<script>
import { store } from '../assets/data/store';

  export default {

    data(){
      return{
        store,
      }
    },
  }
</script>



<template>

<nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand">BOOLFLIX</a>
    <div class="d-flex" role="search">
      <input
      v-model.trim="this.store.queryParams.query"
      class="form-control me-2" type="text" placeholder="Cerca un film">

      <button @click="$emit('startSearch')" class="btn btn-primary">Search</button>
    </div>
  </div>
</nav>

</template>


<style lang="scss">

@use '../assets/scss/partials/variables' as *;
nav.navbar{
  height: 85px;
  a.navbar-brand{
    color: $logo-color;
    font-weight: bold;
    
  }
}


</style>