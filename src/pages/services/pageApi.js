import axios from "axios";

const API = "https://palantir-backend-phi.vercel.app/api/pages";

export const getAllPages = () => axios.get(API);

export const getPageByType = (pageType, category) =>
  axios.get(`${API}/${pageType}/${category}`);

export const createPage = (data) => axios.post(API, data);

export const updatePage = (id, data) =>
  axios.put(`${API}/${id}`, data);

export const deletePage = (id) =>
  axios.delete(`${API}/${id}`);
