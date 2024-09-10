import { useState } from 'react';
import { getUserProfile, updateProfile } from '../api/auth';
import useUserStore from '../zustand/useUserStore';

const Profile = () => {
  const { user, changeNickname } = useUserStore((state) => state);

  const [userData, setUserData] = useState({
    accessToken: user.accessToken || '',
    nickname: user.nickname
  });

  const handleNicknameChange = (e) => {
    setUserData({ ...userData, nickname: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getUserProfile(user.accessToken);
    console.log(data);
    if (data.success) {
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
      <div className="w-full flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
        <div className="bg-white w-[500px]">
          <h1 className="text-3xl font-bold text-primary-color my-40 text-center">{user.nickname}님의 프로필</h1>
          <div>
            <div>아이디</div>
            <div>{user.userId}</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="mr-30">닉네임</label>
              <input className="bg-red-300 w-100%" value={userData.nickname} onChange={handleNicknameChange} />
            </div>
            <button className="w-200 h-[40px] mb-60 bg-sky text-white py-2 rounded hover:bg-blue-600">
              프로필 업데이트
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
