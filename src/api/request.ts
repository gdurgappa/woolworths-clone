import axios from "axios";

export const get = async (url: any) => {
  const response = await axios.get(url);
  return response.data;
};
export const post = async (url: any, body: any) => {
  const response = await axios.post(url, body);
  return response.data;
};
