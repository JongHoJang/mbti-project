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
    <>
      <header className="w-1280 h-80 bg-slate-100 flex items-center justify-center text-14 shadow-lg">
        <div className="w-full">
          <nav className="flex justify-between items-center px-80">
            <Link to="/">홈</Link>
            <div className="flex space-x-16">
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
        </div>
      </header>

      <main className="container mx-auto pt-10 main bg-blue">{children}</main>
    </>
  );
};

export default Layout;
