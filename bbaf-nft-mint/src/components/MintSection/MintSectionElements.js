import styled from "styled-components";

export const MintSectionContainer = styled.div`
  background-color: #141414;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const MintSectionContent = styled.div`
  margin-top: -200px;
`;

export const MintBtn = styled.button`
  height: 45px;
  border: 0;
  width: auto;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  color: white;
  background: -webkit-linear-gradient(left, #ef0403, #40bf71);
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
`;

export const MintHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderTitle = styled.p`
  margin: 0;
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

export const HeaderSubText = styled.p`
  font-size: 25px;
  color: white;
`;
