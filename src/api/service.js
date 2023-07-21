import axios from "../utils/config";

const apiModules = {
  fetchUser: () => axios.get("/users"),
  registerUser: (user) => axios.post("/users", user),
  fetchBooks: () => axios.get("/books"),
};

export default apiModules;
