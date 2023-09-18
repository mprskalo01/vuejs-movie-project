<template>
  <v-footer class="d-flex flex-column bg-teal-lighten-4">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <v-spacer></v-spacer>

      <v-btn
        @click="showAlertDialog"
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title>Alert</v-card-title>
          <v-card-text> No Social Media</v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="closeAlertDialog">Zatvori</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      dialog: false, // Početno stanje dialoga je zatvoreno
    };
  },
  methods: {
    showAlertDialog() {
      // Otvaranje dialoga
      this.dialog = true;
    },
    closeAlertDialog() {
      // Zatvaranje dialoga
      this.dialog = false;
    },
  },
};
</script>

<style></style>

<!--  -->
