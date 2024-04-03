<script>
import { store } from '../assets/data/store';

  export default {

    data(){
      return{
        store,
        nameToSearch: '',
      }
    },
    methods:{
      startSearch(){
        this.store.queryParams= {
          query: this.nameToSearch 
        }
        this.$emit('startSearch')
      }
    }
  }
</script>



<template>

<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">BOOLFLIX</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
      v-model.trim="nameToSearch"
      @keyup.enter="startSearch">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

</template>


<style lang="scss">

</style>