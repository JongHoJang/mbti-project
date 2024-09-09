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
      navigate('/');
    } else {
      alert('아이디가 중복');
      setUserData({
        id: '',
        password: '',
        nickname: ''
      });
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userData.id} placeholder="아이디" onChange={handleIdChange} />
        <input type="password" value={userData.password} placeholder="비밀번호" onChange={handlePasswordChange} />
        <input type="text" value={userData.nickname} placeholder="닉네임" onChange={handleNicknameChange} />
        <button type="submit">회원가입</button>
      </form>
      <span>
        이미 다른 계정이 있으신가요? <Link to="/login">로그인</Link>
      </span>
    </div>
  );
};

export default Signup;
