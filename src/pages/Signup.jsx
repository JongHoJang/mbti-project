import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api/auth';

const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    id: '',
    password: '',
    nickname: ''
  });

  const handleIdChange = (e) => {
    setUserData({ ...userData, id: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const handleNicknameChange = (e) => {
    setUserData({ ...userData, nickname: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await register(userData);
    console.log(data);
    if (data.success) {
      alert(data.message);
      navigate('/login');
    } else {
      alert('이미 사용 중인 아이디입니다. 다른 아이디를 선택해 주세요.');
      setUserData({
        id: '',
        password: '',
        nickname: ''
      });
    }
  };

  return (
    <div className="flex items-center justify-center mt-50">
      <div className="w-[400px] h-[450px] bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center my-30">회원가입</h2>

        <div className="mx-20 bg-slate-50 rounded-lg shadow-md p-20">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={userData.id}
              placeholder="아이디"
              onChange={handleIdChange}
              className="text-14 pl-12 border h-40 mt-20 mb-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              value={userData.password}
              placeholder="비밀번호"
              onChange={handlePasswordChange}
              className="text-14 pl-12 border h-40 mb-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={userData.nickname}
              placeholder="닉네임"
              onChange={handleNicknameChange}
              className="text-14 pl-12 border h-40 mb-10 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className=" h-40 mb-10 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
            >
              회원가입
            </button>
          </form>
          <div className="text-center mt-4 text-12">
            <span>
              이미 다른 계정이 있으신가요?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                로그인
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
