import { baseUrl, detailUrl, searchUrl } from "../utils/generateUrl";

export const getData = async (params, page) => {
  let res = await fetch(params ? searchUrl(params, page) : baseUrl(page));
  let data = await res.json();
  return data;
};

export const getSingleData = async (id) => {
  let res = await fetch(detailUrl(id));
  let data = await res.json();
  return data;
};
