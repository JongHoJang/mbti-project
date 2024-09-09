import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useUserStore from '../zustand/useUserStore';

// Props 로 꼭 children 만 받을 필요는 없답니다.
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { user, logoutUser } = useUserStore((state) => state);

  // 이곳에서 로그인 하지 않은 사용자를 login 페이지로 보내줄 거에요.
  useEffect(() => {}, []);

  const handleLogout = () => {
    logoutUser();
  };
  console.log(user);
  return (
    <div>
      <header>
        <nav>
          <Link to="/">홈</Link>
          <div className="space-x-4">
            {user.success ? (
              <>
                <Link to="/Profile">프로필</Link>
                <Link to="/Test">테스트</Link>
                <Link to="/Result">결과 보기</Link>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-10 main bg-blue">{children}</main>
    </div>
  );
};

export default Layout;
