import { useEffect, useState } from 'react';
import { getUserProfile, updateProfile } from '../api/auth';
import useUserStore from '../zustand/useUserStore';
import axios from 'axios';

const Profile = () => {
  const { user, changeNickname } = useUserStore((state) => state);
  const [findUser, setFindUser] = useState([]);
  const [userData, setUserData] = useState({
    accessToken: user.accessToken || '',
    nickname: user.nickname
  });

  useEffect(() => {
    // const API_URL = 'http://localhost:4000/testResults';
    const API_SHARE = 'https://valiant-expensive-bite.glitch.me/testResults';

    const getTestResults = async () => {
      try {
        const response = await axios.get(API_SHARE);
        const filteredResults = response.data.filter((result) => result.userId === user.userId);
        setFindUser(filteredResults);
      } catch (error) {
        console.log('에러 =>', error);
      }
    };
    getTestResults();
  }, []);

  const handleNicknameChange = (e) => {
    setUserData({ ...userData, nickname: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getUserProfile(user.accessToken);
    console.log(data);
    if (data?.success) {
      const changeData = await updateProfile(userData);
      if (changeData.success) {
        alert('닉네임이 변경되었습니다.');
        changeNickname(changeData);
      } else {
        alert(changeData.message);
      }
    } else {
      alert(data.message);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-primary-color my-40 text-center">"{user.nickname}"님의 프로필</h1>
      <div className="flex items-center justify-center">
        <div className="w-[600px] bg-white shadow-lg rounded-lg p-8">
          <div>
            <div className="flex flex-col items-center justify-center text-center mb-16">
              <div className="w-60 text-12 mt-30">아이디</div>
              <div className="w-80 text-16 font-medium">{user.userId}</div>
            </div>

            <div className="flex flex-col items-center justify-center text-center mb-16">
              <div className="w-60 text-12">MBTI</div>
              <div className="w-80 text-16 font-medium">
                {findUser.length > 0 ? findUser[findUser.length - 1].result : 'No result found'}
              </div>
            </div>

            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center justify-center text-center mb-16">
                <label className="w-60 text-12">닉네임</label>
                <input
                  className="border-1 bg-slate-100 w-180 mb-20 text-14 rounded pl-10"
                  value={userData.nickname}
                  onChange={handleNicknameChange}
                  autoFocus
                />
              </div>
              <button className="w-180 h-[40px] mb-30 text-14 bg-sky text-white py-2 rounded hover:bg-blue-600">
                닉네임 변경
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
