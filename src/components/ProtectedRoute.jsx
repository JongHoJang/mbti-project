import { Navigate } from 'react-router-dom';
import useUserStore from '../zustand/useUserStore';

const ProtectedRoute = () => {
  const { user } = useUserStore((state) => state);

  if (!user.success) {
    alert('로그인이 필요한 페이지입니다. 로그인 후 이용해주세요.');
    return <Navigate to="/login" />;
  }

  // return children;
};

export default ProtectedRoute;
