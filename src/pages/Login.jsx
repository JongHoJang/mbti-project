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
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userData.id} placeholder="아이디" onChange={handleIdChange} />
        <input type="password" value={userData.password} placeholder="비밀번호" onChange={handlePasswordChange} />
        <button>로그인</button>
      </form>
      <span>
        계정이 없으신가요? <Link to="/signup">회원가입</Link>
      </span>
    </div>
  );
};

export default Login;
