<template>
  <section class="mw-100 mh-100 h-100 m-4 gap-3 d-flex flex-column position-relative z-1">
    <div class="d-flex justify-content-between">
      <h1><b>Notely</b></h1>
      <button class="border border-dark position-relative rounded-circle bg-transparent custom-size-btn">
        <DotsHorizontalIcon class="icon-center" :size="16" />
      </button>
    </div>
    <div>
      <input type="search" name="searchNotes" id="searchNotes" placeholder="Search"
        class="w-100 rounded border-0 bg-custom-2 p-2">
    </div>
    
    <div v-if="notes.length" id="notesContainer" class="mw-100 d-flex flex-wrap flex-row gap-3">
      <div v-for="note in notes" :key="note.id"
      @click="openThisNote(note.id)"
        class="note-container border custom-rounded d-flex flex-column bg-custom-1 p-3 gap-2 w-50">
        <p class="text-custom-1 text-title"><b>{{ note.title }}</b></p>
        <p class="text-custom-1 text-content">{{ note.content }}</p>
      </div>
    </div>
  </section>

  <!-- add note button -->
  <button @click="openAddNote" style="width: 58px; height: 58px;"
    class="add-notes-btn bg-dark rounded-circle border-0 z-2">
    <plusIcon class="custom-icon-1" :size="64" />
  </button>

  <!-- add note div -->
  <div v-if="isAddingNote"
    class="custom-container-size bg-white m-4 position-fixed top-0 left-0 d-flex flex-column align-items-center z-3">
    <div class="d-flex flex-row w-100 justify-content-between">
      <div @click="openAddNote" class="back-arrow d-flex flex-row">
        <arrowLeftIcon class="hover-effect" />
        <h4 class="hover-effect"><b>Notes</b></h4>
      </div>
      <button class="border border-dark position-relative rounded-circle bg-transparent custom-size-btn">
        <DotsHorizontalIcon class="icon-center" :size="16" />
      </button>
    </div>
    <form class="d-flex flex-column gap-4 w-100 align-items-center" action="">
      <input v-model="noteTitle" id="titleInput" type="text" placeholder="title"
        class="border-dark rounded w-100 text-start" required>
      <textarea v-model="noteContent" id="titleContent" style="height: 200px;" type="text" placeholder="take your note"
        class="rounded w-100 text-start border-dark" required></textarea>
      <button type="submit" @click="addNote" style="width: 150px;" class="btn bg-custom-1 text-white"><b>create Note
        </b></button>
    </form>
  </div>

  <!-- open note div -->
  <div v-if="openNote && currentNoteId != 0"
    class="custom-container-size bg-white m-4 position-fixed top-0 left-0 d-flex flex-column justify-center align-items-center z-3">
    <div class="d-flex flex-row w-100 justify-content-between">
      <div @click="closeThisNote" class="back-arrow d-flex flex-row">
        <arrowLeftIcon class="hover-effect" />
        <h2 class="hover-effect">Notes</h2>
      </div>
      <button class="border border-dark position-relative rounded-circle bg-transparent custom-size-btn">
        <DotsHorizontalIcon class="icon-center" :size="16" />
      </button>
    </div>
    <div>
      <p class=""><b>{{ currentNote.title }}</b></p>
      <p class="">{{ currentNote.content}}</p>
    </div>

  </div>

  <!-- edit note  -->
</template>

<script lang="ts" src="@/scripts/notes.ts"></script>
<style src="@/styles/notes.css"></style>