import { Link } from 'react-router-dom';
import useUserStore from '../zustand/useUserStore';

// Props 로 꼭 children 만 받을 필요는 없답니다.
const Layout = ({ children }) => {
  const { user, logoutUser } = useUserStore((state) => state);

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
            {user.accessToken ? (
              <>
                <Link to="/profile">프로필</Link>
                <Link to="/test">테스트</Link>
                <Link to="/results">결과 보기</Link>
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
