import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
  width: 100%;
  max-width: 1184px;
  padding: 24px;
  border-radius: 24px;
  background-color: #fff;
  margin-bottom: 32px;

  @media screen and (min-width: 1024px) {
    flex-wrap: unset;
  }
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

export const CardWrap = styled.div`
  @media screen and (min-width: 1024px) {
    width: 86%;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  margin-bottom: 32px;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: unset;
  }
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  gap: 16px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    flex-wrap: unset;
  }
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

  @media screen and (min-width: 768px) {
    margin-left: 64px;
  }
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
  flex-wrap: wrap;
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

export const ButtonBook = styled.button`
  padding: 16px 48px;
  border-radius: 12px;
  background-color: #e0a39a;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  margin-top: 32px;
  transition: transform 150ms linear, background-color 150ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: #f2c0bd;
  }
`;
