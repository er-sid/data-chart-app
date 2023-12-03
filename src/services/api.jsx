import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const login = async (credentials) => {
  return axios.post(`${API_BASE_URL}/login`, credentials);
};

export const getAnalyticsData = async () => {
  return axios.get(`${API_BASE_URL}/analytics`);
};

export const getRawData = async () => {
  return axios.get(`${API_BASE_URL}/data`);
};
