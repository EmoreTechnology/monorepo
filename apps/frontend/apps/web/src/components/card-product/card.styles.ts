import styled from 'styled-components';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 360px;
  background: #f8f9fa;
  border-radius: 24px;

  > .image {
    border-radius: 24px 24px 0 0;
    height: 238px;
  }

  > .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 14px;
    height: 100%;

    > .description {
      margin-top: 8px;
      height: 128px;
    }

    > .favorite {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      width: 104px;
      height: 40px;
      color: #f8f9fa;
      background: #ff9500;
      cursor: pointer;

      :hover {
        background: #d3d3d3;
        background-image: url(faFaceFrown);
        content: 'Desfavoritar';
      }

      > svg {
        margin-left: 8px;
      }
    }
  }
`;
