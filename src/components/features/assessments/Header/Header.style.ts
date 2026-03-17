import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
`;

export const StyledLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
  min-width: 0;
`;

export const StyledTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const StyledTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledGuideCard = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 2px dashed var(--color-border);
  border-radius: 10px;
  padding: 4px 16px;
  white-space: nowrap;
  flex-shrink: 0;
  cursor: pointer;
`;

export const StyledRightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

export const StyledSortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2px 12px;
  font-size: 14px;
  color: var(--color-text-secondary);
  background: var(--color-white);
  white-space: nowrap;
`;

export const StyledChevronIcon = styled.span`
  display: flex;
  align-items: center;
  color: var(--color-text);
`;
