
<script>
  export default {
    props:{
      title: String,
      originalTitle: String,
      originalLanguage: String,
      voteAverage: Number,
    }
  }
</script>


<template>
  <div class="col mt-5">
    <div class="card text-center" style="width: 18rem;">
      <div class="card-body">
        <h4 class="card-title">{{title}}</h4>
        <h5 class="card-subtitle mb-2 text-body-secondary">{{ originalTitle }}</h5>
        <p>{{originalLanguage}}</p>
        <p>{{voteAverage}}</p>
        <!-- <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">

</style>