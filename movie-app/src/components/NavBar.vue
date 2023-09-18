<template>
  <div>
    <v-toolbar dark prominent color="teal">
      <v-toolbar-title
        ><v-btn href="https://vuetifyjs.com/en/" target="_blank"
          >Vuetify</v-btn
        ></v-toolbar-title
      >
      <v-text-field
        v-model="search"
        @input="performSearch"
        label="Search"
        variant="underlined"
        outlined
        placeholder="Enter Movie Title"
      >
        <template v-slot:append>
          <v-icon>mdi-movie</v-icon>
        </template>
      </v-text-field>

      <!-- Ovo će se prikazivati na manjim ekranima (XS i SM) -->
      <v-btn
        class="d-block d-sm-block d-md-none"
        density="compact bg-teal-accent-2"
      >
        <router-link class="text-decoration-none" to="/"
          ><h3 class="nav-but">Home</h3></router-link
        >
      </v-btn>
      <v-btn
        class="d-block d-sm-block d-md-none"
        density="compact bg-teal-accent-2"
      >
        <router-link class="text-decoration-none" to="/about"
          ><h3 class="nav-but">About</h3></router-link
        >
      </v-btn>
      <v-btn
        class="d-block d-sm-block d-md-none"
        density="compact bg-teal-accent-2"
      >
        <router-link class="text-decoration-none" to="/comments"
          ><h3 class="nav-but">Comments</h3></router-link
        >
      </v-btn>

      <!-- Ovo će se prikazivati na srednjim i većim ekranima (MD i veći) -->
      <v-btn class="d-none d-md-inline" density="compact bg-teal-accent-2">
        <router-link class="text-decoration-none" to="/"
          ><h3 class="nav-but">Home</h3></router-link
        >
      </v-btn>
      <v-btn class="d-none d-md-inline" density="compact bg-teal-accent-2">
        <router-link class="text-decoration-none" to="/about"
          ><h3 class="nav-but">About</h3></router-link
        >
      </v-btn>
      <v-btn class="d-none d-md-inline" density="compact bg-teal-accent-2">
        <router-link class="text-decoration-none" to="/comments"
          ><h3 class="nav-but">Comments</h3></router-link
        >
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    performSearch() {
      this.$emit("search", this.search); // Emitovanje događaja za pretragu
    },
  },
};
</script>

<style>
.nav-but {
  color: black;
}
</style>
