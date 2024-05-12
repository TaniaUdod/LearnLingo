import styled from "styled-components";

export const Section = styled.div`
  padding: 0 15px;
  background-color: #f8f8f8;
`;

export const ButtonWrap = styled.div`
  padding-bottom: 64px;
`;

export const Button = styled.button`
  display: block;
  padding: 16px 48px;
  border-radius: 12px;
  background-color: #e0a39a;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  margin: 0px auto;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #f2c0bd;
  }
`;
