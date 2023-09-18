<!-- Comments.vue -->

<template>
  <div>
    <v-text-field v-model="formData.title" label="Naslov"></v-text-field>
    <v-textarea v-model="formData.body" label="Tekst komentara"></v-textarea>
    <v-btn @click="addComment">Dodaj komentar</v-btn>
    <v-divider></v-divider>

    <v-card v-for="comment in comments" :key="comment.id" class="mb-3">
      <v-card-title>{{ comment.title }}</v-card-title>
      <v-card-text>{{ comment.body }}</v-card-text>
      <v-card-actions>
        <v-btn @click="editComment(comment)">Uredi</v-btn>
        <v-btn @click="deleteComment(comment)">Obriši</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      editedComment: null,
      formData: {
        title: "",
        body: "",
        category: "", // Dodano polje za klasu komentara
      },
      categories: ["Filmovi", "Serije"],
      selectedCategory: "", // Dodano polje za odabir klase
    };
  },
  methods: {
    addComment() {
      const newComment = {
        id: Date.now(),
        title: this.formData.title,
        body: this.formData.body,
      };
      this.comments.push(newComment);
      this.clearForm();
    },
    editComment(comment) {
      this.editedComment = comment;
      this.formData.title = comment.title;
      this.formData.body = comment.body;
    },
    saveComment() {
      if (this.editedComment) {
        // Ako uređujete postojeći komentar
        const index = this.comments.indexOf(this.editedComment);
        this.comments[index].title = this.formData.title;
        this.comments[index].body = this.formData.body;
        this.editedComment = null; // Resetirajte uređivanje
      } else {
        // Dodajte novi komentar samo ako nema uređivanja
        this.addComment();
      }
      this.clearForm();
    },
    deleteComment(comment) {
      const index = this.comments.indexOf(comment);
      if (index !== -1) {
        this.comments.splice(index, 1);
      }
      this.clearForm();
    },
    clearForm() {
      this.formData.title = "";
      this.formData.body = "";
    },
  },
};
</script>

<style scoped>
/* Stilizacija po potrebi */
</style>
