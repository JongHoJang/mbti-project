import React from 'react';
import TestResultItem from './TestResultItem';
import useUserStore from '../zustand/useUserStore';

const TestResultList = ({ results, onUpdate, onDelete }) => {
  const { user } = useUserStore((state) => state);

  return (
    <div className="space-y-4">
      {results
        ?.filter((result) => result.visibility || result.userId === user.userId)
        .map((result) => (
          <TestResultItem key={result.id} result={result} user={user} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
    </div>
  );
};

export default TestResultList;
