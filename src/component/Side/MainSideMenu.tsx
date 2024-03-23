import React, { ChangeEvent, useState } from 'react';
import './MainSideMenu.scss';
import { MdOutlineVideoCameraBack, MdReplay } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import SideVideoInfo from './SideVideoInfo';
import { CiTrophy } from "react-icons/ci";
import { BiBadgeCheck } from "react-icons/bi";
import { SlBadge } from "react-icons/sl";
import { RiComputerLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


// Props 타입 정의
interface MainSideMenuProps {
  menuToggle: boolean;
}

// 함수형 컴포넌트 정의
const MainSideMenu: React.FC<MainSideMenuProps> = ({ menuToggle }) => {

  return (
    <div className={`main_side_menu ${menuToggle ? "on" : "off"}`}>
      <div>
        <div className=''>
          <SideVideoInfo title={"전체 라이브"}>
            <MdOutlineVideoCameraBack size={20} />
          </SideVideoInfo>
          <SideVideoInfo title={"다시보기"}>
            <MdReplay size={20} />
          </SideVideoInfo>
          <SideVideoInfo title={"카테고리"}>
            <BiCategory size={20} />
          </SideVideoInfo>
        </div>
        <div className='h_line'>
          <div className='menu_title'>
            <span>즐겨찾기 채널</span>
          </div>
          <SideVideoInfo title={"탬탬버린"} category={"음악"} viewer={5474}>
            <img width="26" height="26" src="https://nng-phinf.pstatic.net/MjAyMzEyMTlfNzEg/MDAxNzAyOTYzMjYyNzg0.p5NGvJ8O95i4qr34yZkV7ERB3ILAufDv-_5gCUmGgyAg.rHSlJvL9dDHVkuFLZcR46qtPa1QCEqDDelVJ60sLe1cg.PNG/ed86de06d353e32b.png?type=f120_120_na" className="navigator_image__T5dSp" alt="" />
          </SideVideoInfo>
          <SideVideoInfo title={"한동숙"} category={"talk"} viewer={3204}>
            <img width="26" height="26" src="https://nng-phinf.pstatic.net/MjAyMzEyMTVfMTgx/MDAxNzAyNjAxMjEyMTYw.Hw6vs76aI0L1zeu4fziwXDE35gidFriwTSgAjq7KWxUg.0V3KaKvctGKcVYa76UiDVTXMjXeUSuUezHX6nGU4y9kg.PNG/123.png?type=f120_120_na" className="navigator_image__T5dSp" alt="" />
          </SideVideoInfo>
          <SideVideoInfo title={"이춘향"} category={"발로란트"} viewer={1987}>
            <img width="26" height="26" src="https://nng-phinf.pstatic.net/MjAyMzEyMjJfMjg0/MDAxNzAzMjQyNTE3MDk5.CuBTzC4M3BeLP9NYEY-p1rYTxW3qfyhTL_zNHI6qaUYg.ohdthdl_5mMiiLo29KGJ_rimQSVm1DNO8Z2dhuhtyugg.PNG/4CBB95E5-2793-46B3-A7D1-F2DD167452CA.png?type=f120_120_na" className="navigator_image__T5dSp" alt="" />
          </SideVideoInfo>
        </div>
        <div className='h_line'>
          <div className='menu_title'>
            <span>팔로우 채널</span>
          </div>
          <SideVideoInfo title={"탬탬버린"} category={"음악"} viewer={5474}>
            <img width="26" height="26" src="https://nng-phinf.pstatic.net/MjAyMzEyMTlfNzEg/MDAxNzAyOTYzMjYyNzg0.p5NGvJ8O95i4qr34yZkV7ERB3ILAufDv-_5gCUmGgyAg.rHSlJvL9dDHVkuFLZcR46qtPa1QCEqDDelVJ60sLe1cg.PNG/ed86de06d353e32b.png?type=f120_120_na" className="navigator_image__T5dSp" alt="" />
          </SideVideoInfo>
          <SideVideoInfo title={"괴물쥐"} category={"리그 오브 레전드"} viewer={5260}>
            <img width="26" height="26" src="https://nng-phinf.pstatic.net/MjAyNDAxMjlfMzkg/MDAxNzA2NTMxMzQ1Nzkx.4gWW7mvPJ4VPeQ-2lKiJ0oP9aGdUWzlU3QhPaGDg6nQg.5QXsCUrhprxH3gEIhP5lRVqb24K6CKkt91t41dbiq1Ug.JPEG/%EA%B4%B4%EB%AC%BC%EC%A5%90.jpg?type=f120_120_na" className="navigator_image__T5dSp" alt="" />
          </SideVideoInfo>
          <SideVideoInfo title={"한동숙"} category={"talk"} viewer={3204}>
            <img width="26" height="26" src="https://nng-phinf.pstatic.net/MjAyMzEyMTVfMTgx/MDAxNzAyNjAxMjEyMTYw.Hw6vs76aI0L1zeu4fziwXDE35gidFriwTSgAjq7KWxUg.0V3KaKvctGKcVYa76UiDVTXMjXeUSuUezHX6nGU4y9kg.PNG/123.png?type=f120_120_na" className="navigator_image__T5dSp" alt="" />
          </SideVideoInfo>
          <SideVideoInfo title={"이춘향"} category={"발로란트"} viewer={1987}>
            <img width="26" height="26" src="https://nng-phinf.pstatic.net/MjAyMzEyMjJfMjg0/MDAxNzAzMjQyNTE3MDk5.CuBTzC4M3BeLP9NYEY-p1rYTxW3qfyhTL_zNHI6qaUYg.ohdthdl_5mMiiLo29KGJ_rimQSVm1DNO8Z2dhuhtyugg.PNG/4CBB95E5-2793-46B3-A7D1-F2DD167452CA.png?type=f120_120_na" className="navigator_image__T5dSp" alt="" />
          </SideVideoInfo>
          <SideVideoInfo title={"피닉스박"} category={"발로란트"} viewer={1987}>
            <img width="26" height="26" src="https://nng-phinf.pstatic.net/MjAyNDAyMDNfMTE3/MDAxNzA2OTUxMjkzMjQ4.3B2KxxTyEpzfCKZTKouycd8ZwRn7CmZG8d8TFz9HZhwg.DWNZZLS2JZD5WYVnHijsBForfURuBsaEkqWzLzyLSzog.PNG/123.png?type=f120_120_na" className="navigator_image__T5dSp" alt="" />
          </SideVideoInfo>
        </div>
        <div className='h_line'>
          <div className='menu_title'>
            <span>서비스 바로가기</span>
          </div>
          <SideVideoInfo title={"네이버 게임"}>
            <BiCategory size={20} />
          </SideVideoInfo>
          <SideVideoInfo title={"e스포츠"}>
            <CiTrophy size={20} />
          </SideVideoInfo>
          <SideVideoInfo title={"오리지널 시리즈"}>
            <BiBadgeCheck size={20} />
          </SideVideoInfo>
          <SideVideoInfo title={"PC 게임"}>
            <RiComputerLine size={20} />
          </SideVideoInfo>
          <SideVideoInfo title={"치지직 라운지"}>
            <SlBadge size={20} />
          </SideVideoInfo>
        </div>
      </div>
    </div>
  );
};

export default MainSideMenu;