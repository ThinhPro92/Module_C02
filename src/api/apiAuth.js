import api from ".";

export const registerPage = async (body) => {
  const { data } = await api.post("/users", body);
  return data;
};

export const loginPage = async (body) => {
  const { data } = await api.post("/login", body);
  return data;
};
