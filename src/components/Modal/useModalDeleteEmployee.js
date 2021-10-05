import { useState } from 'react';

export const UseModalDeleteEmployee = () => {
  const [isShowingDeleteEmployee, setIsShowingDeleteEmployee] = useState(false);

  function toggleDeleteEmployee() {
    setIsShowingDeleteEmployee(!isShowingDeleteEmployee);
  }

  return {
    isShowingDeleteEmployee,
    toggleDeleteEmployee,
  }
};
