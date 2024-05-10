import styled from "styled-components";

export const AuthNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: transform 150ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogBtn = styled.button`
  font-weight: 700;
  line-height: 20px;
`;

export const RegisterBtn = styled.button`
  padding: 14px 39px;
  border-radius: 12px;
  background-color: #121417;
  color: #fff;
  font-weight: 700;
  line-height: 20px;
  transition: transform 150ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;
