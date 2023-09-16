<template>
  <div>
    <v-toolbar dark prominent color="teal">
      <v-toolbar-title>Vuetify</v-toolbar-title>
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
      <v-btn density="compact">
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn density="compact">
        <router-link to="/about">About</router-link>
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
