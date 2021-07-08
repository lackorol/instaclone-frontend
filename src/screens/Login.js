import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
`;

const BottomBox = styled(WhiteBox)``;

const TopBox = styled(WhiteBox)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  form {
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input {
      width: 100%;
      padding:  7px;
      background-color: #FAFAFA;
      border: 1px solid;
      margin-top: 5px;
      &:last-child {
        border: none;
        margin-top: 12px;
        background-color: #0095f6;
        color:white;
        text-align: center;
        padding: 6px 0px;
        font-weight: 500;
      }
    }
  }
`;

const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;
`;

const Separator = styled.div`
  margin: 15px 0px 30px 0px;
  text-transform:uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items:center;
  div {
    width: 100%;
    height:2px;
    background-color: rgb(219,219,219);
  }

  span {
     margin: 0px 10px;
     color: #8E8E8E; 
  }
`;

const FacebookLogin = styled.div`
  span {
    margin-left: 10px;
  }
`

const LOGIN_MUTATION = gql`
  mutation login($username:String!, $password:String!) {
    login(username:$username, password:$password) {
      ok,
      token,
      error
    }
  }
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <TopBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="6x" />
          </div>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Log in" />
          </form>
          <Separator>
            <div></div>
            <span>Or</span>
            <div></div>
          </Separator>
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
          </FacebookLogin>
        </TopBox>
        <BottomBox>
          <span>Don't have an account</span>
          <a href="#">Sign up</a>
        </BottomBox>
      </Wrapper>
    </Container>
  );
};

export default Login;
