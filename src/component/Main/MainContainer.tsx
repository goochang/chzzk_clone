import React, { ChangeEvent, useEffect, useState } from 'react';
import './MainContainer.scss';
import MainContent from './MainContent';
import MainSideMenu from '../Side/MainSideMenu';

// Props 타입 정의
interface MainContainerProps {
  menuToggle: boolean;
}

// 함수형 컴포넌트 정의
const MainContainer: React.FC<MainContainerProps> = ({ menuToggle }) => {

  return (
    <div className='main_container'>
      <MainSideMenu
      menuToggle={menuToggle}
      ></MainSideMenu>
      <MainContent></MainContent>
    </div>
  );
};

export default MainContainer;