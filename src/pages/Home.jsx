import { Link } from 'react-router-dom';
import useUserStore from '../zustand/useUserStore';

const Home = () => {
  const { user } = useUserStore((state) => state);

  return (
    <div>
      <h1>무료 성격 테스트</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
      <div>
        <h4>성격 유형 검사</h4>
        <p>자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.</p>
      </div>
      <div>
        <h4>성격 유형 이해</h4>
        <p>다른 사람들이 어떻게 행돟아는지 이해하는데 도움을 줄 수 있습니다.</p>
      </div>
      <div>
        <h4>팀 평가</h4>
        <p>팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.</p>
      </div>

      {user.success ? <Link to="/test">내 성격 알아보러 가기</Link> : <Link to="/login">로그인하기</Link>}
    </div>
  );
};

export default Home;
