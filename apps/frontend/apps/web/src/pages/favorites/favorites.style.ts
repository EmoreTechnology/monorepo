import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 24px;

    > .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 32px 0;
    }
  }
`;
