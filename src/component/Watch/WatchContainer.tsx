import React, { ChangeEvent, useEffect, useState } from 'react';
import './WatchContainer.scss';
import WatchContent from './WatchContent';
import SideMenu from '../Side/SideMenu';

// Props 타입 정의
interface WatchContainerProps {
  menuToggle: boolean;
}

// 함수형 컴포넌트 정의
const WatchContainer: React.FC<WatchContainerProps> = ({ menuToggle }) => {

  return (
    <div className='watch_container'>
      <SideMenu
      menuToggle={menuToggle}
      ></SideMenu>
      <WatchContent></WatchContent>
    </div>
  );
};

export default WatchContainer;