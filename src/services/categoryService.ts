import apiClient from './api';

export default {
  getCategories() {
    return apiClient.get('/categories/');
  },
  getCategory(id: number) {
    return apiClient.get(`/categories/${id}/`);
  },
  // eslint-disable-next-line
  createCategory(note: any) {
    return apiClient.post('/categories/', note);
  },
  // eslint-disable-next-line
  updateCategory(id: number, category: any) {
    return apiClient.put(`/categories/${id}/`, category );
  },
  deleteCategory(id: number) {
    return apiClient.delete(`/categories/${id}/`);
  },
};      