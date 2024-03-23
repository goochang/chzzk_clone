import React, { ChangeEvent, useState } from 'react';
import './MainTemplate.scss';
import MainHeader from './MainHeader';
import MainContainer from './MainContainer';

// Props 타입 정의
interface MainTemplateProps {
}

// 함수형 컴포넌트 정의
const MainTemplate: React.FC<MainTemplateProps> = ({}) => {
  
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const toggleClick = function(){
    setMenuToggle((menuToggle) => !menuToggle);
  }

  return (
    <div className='main_template'>
        <MainHeader 
        toggleClick={toggleClick}
        ></MainHeader>
        <MainContainer 
        menuToggle={menuToggle}
        ></MainContainer>
    </div>
  );
};

export default MainTemplate;