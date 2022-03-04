import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  width: 100%;
  height: 100%;

  > .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 24px;

    > h2 {
      margin: 32px 0;
    }

    > .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      > div {
        margin-top: 14px;
      }
    }
  }
`;
