import styled from 'styled-components';
import { BaseBox } from '../shared';

const Container = styled(BaseBox)`
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
      padding: 7px;
      background-color: #fafafa;
      margin-top: 5px;
      &:last-child {
        border: none;
        margin-top: 12px;
        background-color: #0095f6;
        color: white;
        text-align: center;
        padding: 6px 0px;
        font-weight: 500;
      }
    }
  }
`;

function FormBox({ children }) {
  return <Container>{children}</Container>;
}
export default FormBox;
