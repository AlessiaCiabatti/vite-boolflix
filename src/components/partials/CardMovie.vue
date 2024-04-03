
<script>
  export default {
    props:{
      title: String,
      originalTitle: String,
      originalLanguage: String,
      popularity: Number,
    }
  }
</script>


<template>
  <div class="col mt-5">
    <div class="card text-center" style="width: 18rem;">
      <div class="card-body">
        <h4 class="card-title">TITOLO</h4>
        <h5 class="card-subtitle mb-2 text-body-secondary">TITOLO ORIGINALE</h5>
        <p>LINGUA</p>
        <p>VOTO</p>
        <!-- <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>