import React, { ChangeEvent, useState } from 'react';
import './MainContainer.scss';
import MainHeader from './MainHeader';
import MainContent from './MainContent';

// Props 타입 정의
interface MainContainerProps {
}

// 함수형 컴포넌트 정의
const MainContainer: React.FC<MainContainerProps> = ({}) => {
  
  return (
    <div className='main_container'>
        <MainHeader></MainHeader>
        <MainContent></MainContent>
    </div>
  );
};

export default MainContainer;