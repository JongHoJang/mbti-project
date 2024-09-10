import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import useUserStore from '../zustand/useUserStore';

const Login = () => {
  const { loginUser } = useUserStore((state) => state);

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    id: '',
    password: ''
  });

  const handleIdChange = (e) => {
    setUserData({ ...userData, id: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login(userData);

    if (data.success) {
      alert('로그인 되었습니다.');
      loginUser(data);
      navigate('/');
    } else {
      alert('아이디나 비밀번호를 확인해주세요');
      setUserData({
        id: '',
        password: ''
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-50">
        <div className="w-[400px] h-[450px] bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center my-30">로그인</h2>
          <div className="mx-20 bg-slate-50 rounded-lg shadow-md p-20">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={userData.id}
                placeholder="아이디"
                onChange={handleIdChange}
                className="text-14 pl-12 border h-40 mt-20 mb-20 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                value={userData.password}
                placeholder="비밀번호"
                onChange={handlePasswordChange}
                className="text-14 pl-12 border h-40 mb-30 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className=" h-40 mb-10 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
              >
                로그인
              </button>
            </form>
            <div className="text-center mt-4 text-12">
              <span>
                계정이 없으신가요?{' '}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  회원가입
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
