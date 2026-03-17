import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Text } from "@/components/ui";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const StyledCardWrapper = styled.article<{ animationDelay?: number }>`
  background: var(--color-bg1);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 6px 20px;
  animation: ${fadeIn} 0.4s ease-out both;
  animation-delay: ${({ animationDelay = 0 }) => animationDelay}ms;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 50%;
  min-width: 0;
`;

export const StyledTitleIconWrapper = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const StyledTitleText = styled(Text)`
  font-family: "Plus Jakarta Sans", sans-serif;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledStrengthIcon = styled.span`
  font-size: 16px;
  flex-shrink: 0;
`;

export const StyledCardLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
  width: 50%;
`;

export const StyledMetaBlock = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
  flex-shrink: 0;
  margin-right: 24px;
`;

export const StyledScheduleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  width: 20%;
`;

export const StyledScheduleIconWrapper = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const StyledLastActivityBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 25%;
`;

export const StyledDataBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 32px 0px 32px;
  gap: 16px;
`;

export const StyledProgressRow = styled.div`
  display: flex;
  align-items: stretch;
`;

export const StyledSectionDivider = styled.div`
  width: 1px;
  background: var(--color-border);
  flex-shrink: 0;
  align-self: stretch;
`;

export const StyledSectionWrapper = styled.div<{ compact?: boolean }>`
  flex: ${({ compact }) => (compact ? "0 0 auto" : "1")};
  padding: 0 14px;
  min-width: 0;
  display: flex;
  gap: 16px;
  align-items: center;
  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }
`;

export const StyledSectionBody = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledBarStack = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  min-width: 0;
`;

export const StyledBarRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const StyledFormativeSectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: 1;
  min-width: 0;
  padding: 0 0 0 14px;
`;

export const StyledAttentionBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  margin-left: 4px;
`;
