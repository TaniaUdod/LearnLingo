import styled from "styled-components";

export const Title = styled.p`
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.8);
  line-height: 22px;
  margin-bottom: 20px;
`;

export const TeacherWrap = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100px;
`;

export const TitleText = styled.p`
  color: #8a8a89;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 4px;
`;

export const TitleName = styled.p`
  font-weight: 500;
  line-height: 24px;
`;

export const TextForm = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 20px;
`;

export const RadioList = styled.ul`
  margin-bottom: 40px;
`;

export const RadioItem = styled.li`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  input {
    display: none;
  }

  svg {
    cursor: pointer;
    margin-right: 8px;
  }

  label {
    display: flex;
    align-items: center;
    line-height: 22px;
    cursor: pointer;
  }
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
