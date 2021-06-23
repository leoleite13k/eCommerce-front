import styled from 'styled-components';

import { MAX_WIDTH_MEDIUM, MIN_WIDTH_LARGE } from '../../utils/contants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 36px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${MAX_WIDTH_MEDIUM + 16}px;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  z-index: 2;
  height: ${MAX_WIDTH_MEDIUM / 4}px;
  width: ${MAX_WIDTH_MEDIUM / 1.3}px;
  margin: 16px;
  padding: 16px;
  border-radius: 6px;
  color: #eee;
  -webkit-box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.6s;

  display: flex;
  flex-direction: row;
  align-self: center;

  &:hover {
    transform: scale(1.06);
  }

  > div {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 12px;

    &:nth-child(1) {
      position: relative;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      > h3 {
        position: absolute;
        top: 12px;
        left: 12px;
      }
    }

    &:nth-child(2) {
      justify-content: center;
    }

    &:nth-child(3) {
      justify-content: flex-end;
      padding-right: 36px;

      > button {
        position: relative;
        border: none;
        background-color: transparent;
        font-weight: 500;
        color: #00adb5;
      }

      @media (min-width: ${MIN_WIDTH_LARGE}px) {
        padding-right: 72px;
      }
    }
  }
`;
