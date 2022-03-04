import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .accordion-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    background: #c4c4c4;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  .accordion-title-active {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    background-color: #39b9d2;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  .accordion-title:hover {
    background-color: #3ab4cc;
  }

  .accordion-title,
  .accordion-title-active,
  .accordion-content {
    display: flex;
    align-items: center;
    padding: 14px 39px;
    margin-top: 1px;

    > .favorite {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      width: 104px;
      height: 40px;
      color: #f8f9fa;
      background: #ff9500;

      > svg {
        margin-left: 8px;
      }
    }

    > p {
      font-size: 18px;
    }
  }

  .accordion-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    > p + p {
      margin-left: 30px;
    }
  }
`;
