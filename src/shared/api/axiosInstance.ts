import axios from "axios";
const instance = axios.create({
  baseURL: "https://127.0.0.0:7196",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    if (error.status === 401) {
      if (location.pathname.includes("/admin/")) {
        localStorage.clear();
        location.href = "/login";
      } else {
        localStorage.removeItem("token");
      }
    }

    return Promise.reject(error);
  },
);

export { instance };
