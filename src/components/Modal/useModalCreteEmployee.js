import { useState } from 'react';

export const UseModalCreteEmployee = () => {
  const [isShowingCreteEmployee, setIsShowingCreteEmployee] = useState(false);

  function toggleCreteEmployee() {
    setIsShowingCreteEmployee(!isShowingCreteEmployee);
  }

  return {
    isShowingCreteEmployee,
    toggleCreteEmployee,
  }
};


