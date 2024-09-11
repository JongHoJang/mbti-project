import TestForm from '../components/TestForm';
import { calculateMBTI } from '../utils/mbtiCalculator';
import { createTestResult } from '../api/testResults';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../zustand/useUserStore';

const Test = () => {
  const { user } = useUserStore((state) => state);
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = calculateMBTI(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      userId: user.userId,
      date: new Date().toISOString(),
      visibility: true
    };
    await createTestResult(resultData);
    navigate('/results');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-primary-color my-40 text-center">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default Test;
