import { API_URL } from '@/types/constants';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: API_URL,
});