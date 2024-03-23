import React, { ChangeEvent, ReactNode, useState } from 'react';
import './SideVideoInfo.scss';
import { MdOutlineVideoCameraBack, MdReplay } from "react-icons/md";
import { BiCategory } from "react-icons/bi";


// Props 타입 정의
interface SideVideoInfoProps {
  children: ReactNode;
  title: String;
  category?: String;
  viewer?: number;
}

// 함수형 컴포넌트 정의
const SideVideoInfo: React.FC<SideVideoInfoProps> = ({children, title, category, viewer}) => {

  return (
    <div className='icon_text'>
      <div className={`flexCenter on ${category && "broadcast_icon"}`}>
        {children}
      </div>
      <div className='info_text'>
        <div>
          <span className={`title ${category && "broadcast_title"}`}>{title}</span>
          {category && <span className='category'>{category}</span>}
        </div>
        {category && viewer && <div>
          <span className='viewer'>{viewer}</span>
        </div>
        }
      </div>
    </div>
  );
};

export default SideVideoInfo;