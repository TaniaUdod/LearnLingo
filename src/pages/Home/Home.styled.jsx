import styled from "styled-components";

export const HeroWrap = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

export const TitleWrap = styled.div`
  width: 720px;
  height: 530px;
  border-radius: 30px;
  background: #f8f8f8;
  padding: 98px 108px 98px 64px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.96px;
  margin-bottom: 32px;
`;

export const TitleAccent = styled.span`
  font-style: italic;
  font-weight: 400;
  background-color: rgb(224, 163, 154);
  border-radius: 8px;
  padding: 0 4px;
`;

export const Text = styled.p`
  line-height: 22px;
  letter-spacing: -0.32px;
  width: 471px;
  margin-bottom: 64px;
`;

export const Button = styled.button`
  padding: 16px 88px;
  border-radius: 12px;
  background-color: #e0a39a;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #f2c0bd;
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  border: 1.5px dashed #e0a39a;
  padding: 40px 120px;
  margin-bottom: 32px;
`;

export const DetailsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const DetailsNumber = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.56px;
`;

export const DetailsText = styled.p`
  color: rgba(18, 20, 23, 0.7);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  width: 96px;
`;
