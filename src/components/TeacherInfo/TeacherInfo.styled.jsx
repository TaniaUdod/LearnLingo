import styled from "styled-components";

export const Section = styled.div`
  margin-top: 16px;
`;

export const Text = styled.p`
  line-height: 24px;
  margin-bottom: 32px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 16px;
`;

export const ReviewTitle = styled.div`
  display: flex;
`;

export const ReviewName = styled.p`
  color: #8a8a89;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2px;
`;

export const ReviewRating = styled.div`
  display: flex;
  gap: 8px;
`;

export const Rating = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const ReviewComment = styled.p`
  font-weight: 500;
  line-height: 24px;
`;
