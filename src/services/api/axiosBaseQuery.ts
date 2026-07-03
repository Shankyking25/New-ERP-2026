import type { AxiosError, AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

type AxiosBaseQueryArgs = {
  url: string;
  method: AxiosRequestConfig["method"];
  data?: unknown;
  params?: unknown;
};

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params }: AxiosBaseQueryArgs) => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
      });

      return {
        data: result.data,
      };
    } catch (axiosError) {
      const err = axiosError as AxiosError;

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data,
        },
      };
    }
  };

export default axiosBaseQuery;