import { Link } from 'react-router-dom';
import useUserStore from '../zustand/useUserStore';

const Home = () => {
  const { user } = useUserStore((state) => state);

  return (
    <div>
      <h1 className="flex justify-center mt-60 text-30 font-semibold">무료 성격 테스트</h1>
      <p className="flex justify-center mt-10">자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>

      <div className="flex justify-center mt-40 gap-40">
        <div className="w-[350px] h-[150px] rounded-lg shadow-md p-12">
          <h4 className="flex justify-center my-10 text-18 font-medium">성격 유형 검사</h4>
          <p className="text-14">자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.</p>
        </div>
        <div className="w-[350px] h-[150px] rounded-lg shadow-md p-12">
          <h4 className="flex justify-center my-10 text-18 font-medium">성격 유형 검사</h4>
          <p className="text-14">다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.</p>
        </div>
        <div className="w-[350px] h-[150px] rounded-lg shadow-md p-12">
          <h4 className="flex justify-center my-10 text-18 font-medium">성격 유형 검사</h4>
          <p className="text-14">팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.</p>
        </div>
      </div>

      <div className="flex justify-center mt-40">
        {user.success ? (
          <Link
            to="/test"
            className="flex items-center justify-center text-center mt-20 w-[200px] h-[40px] rounded-full bg-sky text-white text-14"
          >
            내 성격 알아보러 가기
          </Link>
        ) : (
          <Link
            to="/login"
            className="flex items-center justify-center text-center mt-20 w-[200px] h-[40px] border-solid border-2 border-sky-500"
          >
            로그인하기
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
