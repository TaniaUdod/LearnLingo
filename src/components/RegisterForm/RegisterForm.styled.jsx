import styled from "styled-components";

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.8);
  line-height: 22px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Input = styled.input`
  padding: 16px 18px;
  line-height: 22px;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  width: 100%;
  max-width: 438px;
`;

export const PasswordWrap = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 18px;
    top: 34%;
    cursor: pointer;
  }
`;

export const Error = styled.p`
  font-size: 12px;
  color: #e0a39a;
  position: absolute;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  width: 100%;
  height: 60px;
  margin-top: 40px;
  border-radius: 12px;
  background-color: #e0a39a;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #f2c0bd;
  }
`;
