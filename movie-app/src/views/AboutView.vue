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
  <div class="text-center mt-16">
    <h1>About Us</h1>
    <p>
      Ova web stranica predstavlja projekt u okviru kolegija Informatički
      projekt II. Naša svrha je upotrijebiti tehnologije poput Vue-a,<br />
      Vuetify CSS okvira, Vue routera i Axiosa za integraciju odabrane javno
      dostupne API usluge. <br />Naš cilj je omogućiti korisnicima da pretražuju
      željene podatke iz svijeta filma.
    </p>
    <h3>AUTORI: Mario Prskalo i Luka Raic</h3>
  </div>
  <VueFooter class="footer"></VueFooter>
</template>
<script>
import VueFooter from "@/components/VueFooter.vue";
export default {
  components: {
    VueFooter,
  },
};
</script>
<style></style>
