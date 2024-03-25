import React, { ChangeEvent, useState } from 'react';
import './WatchTemplate.scss';
import MainHeader from '../Main/MainHeader';
import MainContainer from '../Main/MainContainer';
import WatchContainer from './WatchContainer';

// Props 타입 정의
interface WatchTemplateProps {
}

// 함수형 컴포넌트 정의
const WatchTemplate: React.FC<WatchTemplateProps> = ({}) => {
  
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const toggleClick = function(){
    setMenuToggle((menuToggle) => !menuToggle);
  }

  return (
    <div className='main_template'>
        <MainHeader 
        toggleClick={toggleClick}
        ></MainHeader>
        <WatchContainer 
        menuToggle={menuToggle}
        ></WatchContainer>
    </div>
  );
};

export default WatchTemplate;