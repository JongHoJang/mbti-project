import axios from 'axios';

// const API_URL = 'http://localhost:4000/testResults';
const API_SHARE = 'https://valiant-expensive-bite.glitch.me/testResult';

export const getTestResults = async () => {
  const response = await axios.get(API_SHARE);
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await axios.post(API_SHARE, resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_SHARE}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.patch(`${API_SHARE}/${id}`, { visibility: visibility });
  return response.data;
};
