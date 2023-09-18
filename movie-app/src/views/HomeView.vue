<template>
  <NavBar @search="performSearch"></NavBar>
  <LatestMovie :films="films"></LatestMovie>
  <VueFooter class="footer"></VueFooter>
</template>

<script>
import NavBar from "@/components/NavBar.vue"; // Importovanje NavBar komponente
import LatestMovie from "@/components/LatestMovie.vue"; // Importovanje LatestMovie komponente
import VueFooter from "@/components/VueFooter.vue";
import axios from "axios";

export default {
  components: {
    NavBar,
    LatestMovie,
    VueFooter,
  },
  data() {
    return {
      films: [],
    };
  },
  methods: {
    performSearch(searchTerm) {
      const apiKey = "5c3178a9";
      const searchApi = `https://www.omdbapi.com/?apikey=${apiKey}&y=&s=${searchTerm}`;
      axios
        .get(searchApi)
        .then((response) => {
          const movieResults = response.data.Search || [];
          const promises = movieResults.map((movie) => {
            // Za svaki film, napravite novi zahtjev sa imdbID-om da dobijete detalje filma
            const movieApi = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`;
            return axios
              .get(movieApi)
              .then((movieResponse) => movieResponse.data)
              .catch((error) => {
                console.error(
                  "Greška prilikom dohvatanja detalja filma:",
                  error
                );
                return null;
              });
          });

          // Nakon što svi zahtjevi završe, postavite detalje filma u state
          Promise.all(promises)
            .then((moviesWithPlot) => {
              this.films = moviesWithPlot.filter((movie) => movie !== null);
            })
            .catch((error) => {
              console.error(
                "Greška prilikom dohvatanja detalja filmova:",
                error
              );
            });
        })
        .catch((error) => {
          console.error("Greška prilikom pretrage:", error);
        });
    },
  },
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
}
</style>
