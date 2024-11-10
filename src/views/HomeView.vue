<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
     <section>
      <div class="notes-container" v-if="notes.length">
        <h1>Meine Notizen</h1>
        <ul class="notes-list-container">
          <li v-for="note in notes" :key="note.id">{{ note.title }}</li>
        </ul>
      </div>
     </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import noteService from "@/services/noteService";

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  // eslint-disable-next-line
  notes: any[] = [];

  mounted(){
    this.fetchNotes()
  }

  fetchNotes(){
    noteService.getNotes().then(response => {
      this.notes = response.data;
    })
  }
}
</script>
<style>
section{
  width: 100%;
  height: 100%;
}
.notes-container{
  /* width: calc(100% - padding*2); */
  max-width: 100%;
  height: calc(100dvh - 4px);
  padding: 2px;
  border: 1px solid black;
}
</style>
