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

<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">BOOLFLIX</a>
    <form class="d-flex" role="search">
      <input
      v-model.trim="this.store.queryParams.query"
      class="form-control me-2" type="text" placeholder="Cerca un film">

      <button @click="$emit('startSearch')" class="btn btn-primary">Search</button>
    </form>
  </div>
</nav>

</template>


<style lang="scss">

</style>