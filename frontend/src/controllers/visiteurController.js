import axios from "axios";

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;

export const getAllController = async (body) => {
  const { data } = await axios.get(`${apiUrl}/visiteur/get-all`, body, {
    withCredentials: true,
  });
  return data;
};
