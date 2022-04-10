import styled from '@emotion/styled';

export const Block = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  height: 72px;
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  top: 0px;
  font-size: 16px;
  font-weight: bold;
`;

export const Left = styled.div`
  padding-left: 20px;
  font-size: 20px;
`;

export const Right = styled.div`
  & a {
    padding: 0px 20px;
  }
`;
