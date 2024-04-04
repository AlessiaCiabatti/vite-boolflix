import { reactive } from "vue"

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  queryParams:{
    query: 'avengers',
    language: 'it-IT',
    api_Key: '4ff17c9119ea91b125eff2d9e4974685',
  },
  movieList: [],
  movieSeries: [],
})