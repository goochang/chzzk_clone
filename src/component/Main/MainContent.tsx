import React, { ChangeEvent, useEffect, useState } from 'react';
import './MainContent.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Props 타입 정의
interface MainContentProps {
}

// 함수형 컴포넌트 정의
const MainContent: React.FC<MainContentProps> = ({ }) => {

  const [videos, setVideos] = useState<Array<any>>([]);
  
  const fetchPopularVideos = async () => {
    const api_key = process.env.REACT_APP_API_KEY;
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet,statistics',
          chart: 'mostPopular',
          maxResults: 12,
          regionCode: 'KR',
          key: api_key // 본인의 YouTube API 키로 변경해야 합니다.
        }
      });
      setVideos(response.data.items);
      console.log(response.data.items)
    } catch (error) {
      console.error('Error fetching popular videos:', error);
    }
  };
  useEffect(() => {

    fetchPopularVideos();
  }, []);

  const viewcnt = function(cnt:number){
    let result = "0";
    const cnt_str = cnt.toString();
    switch (cnt_str.length) {  // 100 1.3천 2.7만 27만 280만
      case 0:
      case 1:
      case 2:
      case 3:
        result = cnt.toString();
        break;
      case 4:
        result = cnt_str[0] + "." + cnt_str[1] + "천";
        break;
      case 5:
        result = cnt_str[0] + "." + cnt_str[1] + "만";
        break;
      case 6:
        result = cnt_str[0] + cnt_str[1] + "만";
        break;
      case 7:
        result = cnt_str[0] + cnt_str[1] + cnt_str[2] + "만";
        break;
      case 8:
        result = cnt_str[0] + cnt_str[1] + cnt_str[2] + cnt_str[3] + "만";
        break;    
      default:
        break;
    }
    return "조회수 " + result + "회";
  }

  return (
    <div className='main_content'>
      {
        videos && videos.map((video, index) => (
          <div className='video_content' key={index}>
            <Link to={`/watch?v=${video.id}`}>
              <div className='thumbnail'>
                <img src={video.snippet.thumbnails.medium.url} />
              </div>
            </Link>
            <div className='video_info'>
              <span className='title'>
                {video.snippet.title}
              </span>
              <span className='channelTitle'>
                {video.snippet.channelTitle}
              </span>
              <span className='viewCount'>
                { viewcnt(video.statistics.viewCount) }
              </span>
            </div>
          </div>
        ))

      }
    </div>
  );
};

export default MainContent;