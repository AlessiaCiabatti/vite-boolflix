import { reactive } from "vue"

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  imgUrlBase: 'https://image.tmdb.org/t/p/w342',
  queryParams:{
    query: 'avengers',
    language: 'it-IT',
    api_key: '4ff17c9119ea91b125eff2d9e4974685',
  },
  movie: [],
  tv: [],
})