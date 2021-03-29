import styled from 'styled-components';
import Switch from 'react-switch'

export const Container = styled.div`
  display: flex; 
  align-content: center; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #000;
  margin-top: 30px;

  .title {
    display: flex;
    position: relative;
  }

  h2 {
    margin-left: 5px;
  }
`;

export const Switcher = styled(Switch)`
  margin-left: 30px;
`