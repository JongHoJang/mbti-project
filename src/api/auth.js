import axios from 'axios';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';

// 회원가입
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.log('error -> ', error);
    return { success: false };
  }
};

// 로그인
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    return console.log('error -> ', error);
  }
};

// 프로필 정보 가지고 오기
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    return console.log('error -> ', error);
  }
};

// 프로필 정보 업데이트
export const updateProfile = async (formData) => {
  try {
    const response = await axios.patch(
      `${API_URL}/profile`,
      { nickname: formData.nickname },
      {
        headers: {
          Authorization: `Bearer ${formData.accessToken}`
        }
      }
    );
    return response.data;
  } catch (error) {
    return console.log('error -> ', error);
  }
};
