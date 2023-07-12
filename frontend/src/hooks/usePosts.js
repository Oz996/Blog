import axios from "axios";

const _URL = axios.create({
  baseURL:"https://blogs-api-821q.onrender.com",
  
})

export const getPosts = () => {
  return axios
    .get("https://blogs-api-821q.onrender.com/posts")
    .then((res) => res.data);
};

export const getPost = (id) => {
  return axios
    .get(`https://blogs-api-821q.onrender.com/posts/${id}`)
    .then((res) => res.data);
};

export const createPosts = (formData) => {
  return axios
    .post("https://blogs-api-821q.onrender.com/posts", formData)
    .then((res) => res.data);
};
