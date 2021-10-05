import { useState } from 'react';

export const UseModalEditEmployee = () => {
  const [isShowingEditEmployee, setIsShowingEditEmployee] = useState(false);

  function toggleEditEmployee() {
    setIsShowingEditEmployee(!isShowingEditEmployee);
  }

  return {
    isShowingEditEmployee,
    toggleEditEmployee,
  }
};


