import api from ".";

export const getProduct = async (params = {}) => {
  const { data } = await api.get("/products", { params });
  return data;
};
export const detailProduct = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};
export const deeleteProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};
export const createProduct = async (body) => {
  const { data } = await api.post("/products", body);
  return data;
};
export const updateProduct = async (id, body) => {
  const { data } = await api.patch(`/products/${id}`, body);
  return data;
};
