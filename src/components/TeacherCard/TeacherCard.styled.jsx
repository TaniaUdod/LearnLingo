import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  width: 100%;
  max-width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background-color: #fff;
  margin-bottom: 32px;
`;

export const ImgWrap = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #f2c0bd;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    top: 15px;
    right: 20px;
    display: flex;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 3px solid white;
    background-color: #38cd3e;
    z-index: 10;
  }
`;

export const Img = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const TitleWrap = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

export const TitleText = styled.p`
  color: #8a8a89;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const TextSpan = styled.span`
  color: #8a8a89;
  font-weight: 500;
  line-height: 24px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
`;

export const TitleList = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-left: auto;
`;

export const TitleItem = styled.li`
  display: flex;
  font-weight: 500;
  line-height: 24px;
  align-items: center;

  &:not(:last-child)::after {
    content: "";
    display: flex;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.2);
    margin-left: 16px;
  }
`;

export const ButtonFavorite = styled.button`
  display: flex;
  margin-left: 64px;
`;

export const Text = styled.p`
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ButtonMore = styled.button`
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const LevelList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const LevelItem = styled.li`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`;
