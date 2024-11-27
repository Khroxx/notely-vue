import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8080/api/',   
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
/* eslint-disable  */
  async getNotes() {
    return apiClient.get('/notes/')
  },
  async getNoteById(id: number) {
    return apiClient.get(`/notes/${id}/`)
  },
  async createNote(note: { title: string; content: string }) {
    try {
      apiClient.post('/notes/', note)
    } catch (error) {
      console.log(error)
    }
  },
  async updateNote(id: number, note: {title: string, content: string}) {
    return apiClient.put(`/notes/${id}/`, note);
  },
  async deleteNoteById(id: number) {
    apiClient.delete(`/notes/${id}/`);
  },
};                      