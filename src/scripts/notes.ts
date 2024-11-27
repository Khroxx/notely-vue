// import '@/styles/notes.css';
// import '@/script/notes.ts'
import { Options, Vue } from "vue-class-component";
import noteService from "@/services/noteService";
import DotsHorizontalIcon from 'vue-material-design-icons/DotsHorizontal.vue';
import plusIcon from 'vue-material-design-icons/Plus.vue';
import arrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'

@Options({
    components: {
        DotsHorizontalIcon,
        plusIcon,
        arrowLeftIcon
    },
})
export default class HomeView extends Vue {
    /* eslint-disable */
    notes: any[] = [];
    currentNoteId: number = 0;
    currentNote: any = [];
    isAddingNote: boolean = false;
    openNote: boolean = false;
    noteTitle: string = '';
    noteContent: string = '';

    mounted() {
        this.fetchNotes()
    }

    fetchNotes() {
        noteService.getNotes().then(response => {
            this.notes = response.data;
        })
    }

    openThisNote(note_id: number) {
        this.openNote = !this.openNote
        this.currentNoteId = note_id;
        noteService.getNoteById(this.currentNoteId).then(response => {
            this.currentNote = response.data;
        });
    }
    closeThisNote(){
        this.currentNoteId = 0;
        this.currentNote = [];
        this.openNote = false;
    }
    openAddNote() {
        this.isAddingNote = !this.isAddingNote
    }
    addNote() {
        const note = {
            title: this.noteTitle,
            content: this.noteContent
        };
        console.log(note)
        noteService.createNote(note).then(() => {
            this.noteTitle = '';
            this.noteContent = '';
            this.isAddingNote = false;  
            this.fetchNotes();
        });
    }
    editThisNote(id: number, note: any) {
        // send data put request
        noteService.updateNote(id, note)
    }

    deleteThisNote(id: number) {
        // send delete request with id
        noteService.deleteNoteById(id)
    }
}