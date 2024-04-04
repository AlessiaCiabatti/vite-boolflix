import { reactive } from "vue"

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  queryParams:{
    query: 'fantozzi',
    language: 'it-IT',
    api_key: '4ff17c9119ea91b125eff2d9e4974685',
  },
  movie: [],
  tv: [],
})