<template>
  <div>
    <div v-if="films.length > 0" class="film-list">
      <h2 class="text-center">Search Results:</h2>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="film in films"
          :key="film.imdbID"
        >
          <v-card class="mx-auto" max-width="344">
            <v-img
              :src="film.Poster"
              height="600px"
              cover
              alt="Movie Poster"
            ></v-img>

            <v-card-title style="overflow-wrap: break-word">
              <div class="wrapdiv">
                <h3>{{ film.Title }}</h3>
              </div>
            </v-card-title>

            <v-card-subtitle>
              <h2 class="font-weight-black">{{ film.Year }}</h2>
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                :href="'https://www.imdb.com/title/' + film.imdbID"
                target="_blank"
                text
                class="mt-0 ms-2 bg-amber"
                color="black"
                density="compact"
                hide-details
                label="IMDb Link"
                >IMDb Link</v-btn
              >

              <v-spacer></v-spacer>

              <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show = !show"
              ></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ film.Plot }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  props: {
    films: Array, // Prop za prikaz filmova
  },
};
</script>
<style>
.wrapdiv {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #b8b5b5;
  border-radius: 4px;
}
.v-application__wrap {
  background-color: #b2dfdb;
  background-size: cover;
  background-position: center;
}
</style>
