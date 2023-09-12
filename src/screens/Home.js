import { isLoggedInVar } from './apollo';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Avatar from '../components/Avatar';
import styled from 'styled-components';
import { FatText } from '../components/shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const FEED_QUERY = gql`
  query feed {
    seeFeed {
      id
      user {
        username
        avatar
      }
      file
      caption
      likes
    }
  }
`;

const PhotoContainer = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 20px;
  max-width: 615px;
`;

const PhotoHeader = styled.div`
  padding: 15px 10px;
  display: flex;
  align-items: center;
`;

const Username = styled(FatText)`
  margin-left: 15px;
`;
const PhotoFile = styled.div`
  min-width: 100%;
`;

const PhotoActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  div {
    display: flex;
    align-items: center;
  }
`;

const PhotoAction = styled.div`
  margin-right: 10px;
`;

const Home = () => {
  const { data } = useQuery(FEED_QUERY);
  console.log(data);
  return (
    <div>
      {data?.seeFeed?.map((photo) => (
        <PhotoContainer>
          <PhotoHeader>
            <Avatar lg url={photo.user.avatar} />
            <Username>{photo.user.username}</Username>
          </PhotoHeader>
          <PhotoFile style={{ backgroundImage: '' }}>
            <img src={photo?.file} />
          </PhotoFile>
          <PhotoActions>
            <div></div>
            <div>
              <PhotoAction>
                <FontAwesomeIcon size={'lg'} icon={faHeart} />
              </PhotoAction>
              <PhotoAction>
                <FontAwesomeIcon size={'lg'} icon={faComment} />
              </PhotoAction>
              <PhotoAction>
                <FontAwesomeIcon size={'lg'} icon={faPaperPlane} />
              </PhotoAction>
            </div>
            <div>
              <PhotoAction>
                <FontAwesomeIcon size={'lg'} icon={faBookmark} />
              </PhotoAction>
            </div>
          </PhotoActions>
        </PhotoContainer>
      ))}
    </div>
  );
};

export default Home;
