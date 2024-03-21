import React, { ChangeEvent, useState } from 'react';
import './MainHeader.scss';
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaCheeseSolid } from "react-icons/lia";
import { BiSolidCoupon } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";


// Props 타입 정의
interface MainHeaderProps {
}

// 함수형 컴포넌트 정의
const MainHeader: React.FC<MainHeaderProps> = ({ }) => {

  return (
    <div className='main_header'>
      <div className='main_header_menu'>
        <button className='hb_btn'>
          <RxHamburgerMenu size={20} />
        </button>
        <span>치지직</span>
      </div>
      <div className='main_header_search'>
        <input type='text' placeholder='스트리머, 게임 영상 검색' />
      </div>
      <div className='main_header_submenu'>
        <div className='submenu_studio'>
          <span>스튜디오</span>
        </div>
        <div className='submenu_icon' id='submenu_icon1'>
          <LiaCheeseSolid size={35} />
        </div>
        <div className='submenu_icon' id='submenu_icon2'>
          <BiSolidCoupon size={35} />
        </div>
        <div className='submenu_icon' id='submenu_icon3'>
          <IoMdNotificationsOutline size={35} />
        </div>
        <div className='submenu_icon' id='submenu_icon4'>
          <FaRegMoon size={25} />
        </div>
        <div>
          <BiSolidUserCircle size={35} />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;