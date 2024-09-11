import { Navigate } from 'react-router-dom';
import useUserStore from '../zustand/useUserStore';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserStore((state) => state);

  if (!user.accessToken) {
    // accessToken이 없으면 로그인되지 않은 상태로 처리
    alert('로그인이 필요한 페이지입니다. 로그인 후 이용해주세요.');
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
