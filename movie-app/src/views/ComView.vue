<template>
  <v-toolbar dark prominent color="teal">
    <v-toolbar-title
      ><v-btn href="https://vuetifyjs.com/en/" target="_blank"
        >Vuetify</v-btn
      ></v-toolbar-title
    >
    <v-btn density="compact bg-teal-accent-2">
      <router-link class="text-decoration-none" to="/"
        ><h3 class="nav-but">Home</h3></router-link
      >
    </v-btn>
    <v-btn density="compact bg-teal-accent-2">
      <router-link class="text-decoration-none" to="/about"
        ><h3 class="nav-but">About</h3></router-link
      >
    </v-btn>
    <v-btn density="compact bg-teal-accent-2">
      <router-link class="text-decoration-none" to="/comments"
        ><h3 class="nav-but">Comments</h3></router-link
      >
    </v-btn>
    <v-spacer></v-spacer>
  </v-toolbar>
  <ComComp></ComComp>
  <VueFooter class="footer"></VueFooter>
</template>
<script>
import VueFooter from "@/components/VueFooter.vue";
import ComComp from "@/components/ComComp.vue";
export default {
  components: {
    VueFooter,
    ComComp,
  },
};
</script>
<style></style>
