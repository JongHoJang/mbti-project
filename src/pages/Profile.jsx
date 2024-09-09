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
    <div>
      <div>
        <h1>{user.nickname}님의 프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input value={userData.nickname} onChange={handleNicknameChange} />
          </div>
          <button>프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
