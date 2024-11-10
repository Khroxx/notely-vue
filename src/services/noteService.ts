import apiClient from './api';

export default {
  getNotes() {
    return apiClient.get('/notes/');
  },
  getNote(id: number) {
    return apiClient.get(`/notes/${id}/`);
  },
  // eslint-disable-next-line
  createNote(note: any) {
    return apiClient.post('/notes/', note);
  },
  // eslint-disable-next-line
  updateNote(id: number, note: any) {
    return apiClient.put(`/notes/${id}/`, note);
  },
  deleteNote(id: number) {
    return apiClient.delete(`/notes/${id}/`);
  },
};                      