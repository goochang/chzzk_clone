import React, { ChangeEvent, useEffect, useState } from 'react';
import './MainContent.scss';
import axios from 'axios';

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
  return (
    <div className='main_content'>
      {
        videos && videos.map((video, index) => (
          <div className='video_content' key={index}>
            <div className='thumbnail'>
              <img src={video.snippet.thumbnails.medium.url} />
            </div>
            <div>
            <span>
              {video.snippet.title}
            </span>
            </div>
          </div>
        ))

      }
    </div>
  );
};

export default MainContent;