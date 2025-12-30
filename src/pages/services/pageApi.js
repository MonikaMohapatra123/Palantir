

import axios from "axios";

const API = "https://palantir-backend-phi.vercel.app/api/pages";

/* Admin */
export const getAllPages = () => axios.get(API);
export const createPage = (data) => axios.post(API, data);
export const updatePage = (id, data) => axios.put(`${API}/${id}`, data);
export const deletePage = (id) => axios.delete(`${API}/${id}`);

/* Dynamic Page */
export const getPageByType = (pageType, category) =>
  axios.get(`${API}/${pageType}/${category}`);

/* Navbar */
export const getNavbarData = () =>
  axios.get(`${API}/navbar/grouped`);
