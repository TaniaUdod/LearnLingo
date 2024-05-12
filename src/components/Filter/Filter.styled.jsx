import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 1184px;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  padding-top: 32px;
  margin-bottom: 32px;
`;

export const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
`;

export const Select = styled.select`
  height: 53px;
  padding: 16px 18px;
  border-radius: 14px;
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;

  & option {
    color: rgba(18, 20, 23, 0.2);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }

  & option:checked {
    color: #121417;
  }
`;
