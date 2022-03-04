import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #edf6f9;
  box-shadow: 0px 4px 18px -1px rgba(0, 0, 0, 0.21);

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    width: 100%;

    > a {
      color: black;
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;

      :hover {
        color: #3ab4cc;
      }
    }

    > p {
      font-weight: 600;
      font-size: 20px;
      cursor: pointer;

      :hover {
        color: #3ab4cc;
      }
    }

    > .user {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;

      > img {
        width: 40px;
        height: 40px;
      }

      > p {
        margin-left: 14px;
      }
    }
  }
`;
