// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Request Interceptor (attach token later)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;







{/*
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("🚀 Request");

    console.log(config.method);

    console.log(config.url);

    console.log(config.data);

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("✅ Response");

    console.log(response.status);

    console.log(response.data);

    return response;
  },
  (error) => {
      console.log("========== AXIOS ERROR ==========");
    console.log(error);
    console.log("Message:", error.message);
    console.log("Response:", error.response);
    console.log("Request:", error.request);
    console.log("Config:", error.config);

    return Promise.reject(error);
  }
);

export default axiosInstance;

*/}



import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

/* ===========================
   REQUEST INTERCEPTOR
=========================== */

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("🚀 Request");
    console.log("URL:", config.url);
    console.log("Method:", config.method);
    console.log("Headers:", config.headers);
    console.log("Body:", config.data);

    return config;
  },
  (error) => Promise.reject(error)
);

/* ===========================
   RESPONSE INTERCEPTOR
=========================== */

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("✅ Response");
    console.log(response.status);
    console.log(response.data);

    return response;
  },

  async (error) => {
    console.log("========== AXIOS ERROR ==========");
    console.log(error);

    // Access Token Expired
    if (
      error.response?.status === 401 &&
      !error.config._retry
    ) {
      error.config._retry = true;

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/refresh-token`,
          {},
          {
            withCredentials: true,
          }
        );

        const newAccessToken =
          response.data.accessToken;

        localStorage.setItem(
          "accessToken",
          newAccessToken
        );

        error.config.headers.Authorization =
          `Bearer ${newAccessToken}`;

        return axiosInstance(error.config);

      } catch (refreshError) {

        localStorage.removeItem("accessToken");

        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;