import React, { ChangeEvent, useEffect, useState } from 'react';
import './WatchContent.scss';
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

// Props 타입 정의
interface WatchContentProps {
}

// 함수형 컴포넌트 정의
const WatchContent: React.FC<WatchContentProps> = ({ }) => {
  const location = useLocation();
  // URLSearchParams를 사용하여 쿼리 파라미터를 분석함
  const queryParams = new URLSearchParams(location.search);
  // v 파라미터의 값을 가져옴
  const videoId = queryParams.get('v');
  const [video, setVideo] = useState<any>(null);

  const opts = {
    height: '720',
    width: '1280',
    playerVars: {
      autoplay: 1,
    },
  };


  const fetchVideo = async (Id: string) => {
    const api_key = process.env.REACT_APP_API_KEY;
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet,statistics',
          id: Id,
          maxResults: 12,
          regionCode: 'KR',
          key: api_key // 본인의 YouTube API 키로 변경해야 합니다.
        }
      });
      if (response.data.items.length) {
        setVideo(response.data.items[0]);
      }
      console.log(response.data.items[0])
    } catch (error) {
      console.error('Error fetching popular videos:', error);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchVideo(videoId);

    }

  }, [videoId])

  return (
    <div className='watch_content'>
      <div className='video_content'>
        {videoId &&
          <YouTube videoId={videoId} opts={opts} />
        }
      </div>
      {
        video && 
        <div className='video_info'>
          <div>
            <span>{video.snippet && video.snippet.title}</span>
            <div>
              <span>
                {video.snippet.channelTitle}
              </span>
              <span>
                {video.statistics.likeCount}                
              </span>
            </div>
          </div>
          <div>
            <span>{video.snippet.description}</span>
          </div>
          <div>
            <span>댓글 {video.statistics.commentCount}개</span>
          </div>

        </div>
      }

    </div>
  );
};

export default WatchContent;