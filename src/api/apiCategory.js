import api from ".";

export const getCategory = async (params = {}) => {
  const { data } = await api.get("/categories", { params });
  return data;
};
export const detailCategory = async (id) => {
  const { data } = await api.get(`/categories/${id}`);
  return data;
};
export const deeleteCategory = async (id) => {
  const { data } = await api.delete(`/categories/${id}`);
  return data;
};
export const createCategory = async (body) => {
  const { data } = await api.post("/categories", body);
  return data;
};
export const updateCategory = async (id, body) => {
  const { data } = await api.patch(`/categories/${id}`, body);
  return data;
};
export const getProductsByCategory = async (categoryId) => {
  const { data } = await api.get(`/products?categoryId=${categoryId}`);
  return data;
};
