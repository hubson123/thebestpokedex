import { API_URL } from '@/types/constants';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

export async function callAPI(
  method: 'post' | 'get' | 'put' | 'delete',
  url: string,
  data?: any
) {
  const response = await axiosInstance({
    method,
    url,
    data,
  });
  return response;
}