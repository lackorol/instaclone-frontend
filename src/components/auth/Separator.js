import styled from 'styled-components';

const SSeparator = styled.div`
  margin: 15px 0px 30px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  div {
    width: 100%;
    height: 2px;
    background-color: rgb(219, 219, 219);
  }

  span {
    margin: 0px 10px;
    color: #8e8e8e;
    font-size: 12px;
  }
`;

function Separator() {
  return (
    <SSeparator>
      <div />
      <span>Or</span>
      <div />
    </SSeparator>
  );
}

export default Separator;
