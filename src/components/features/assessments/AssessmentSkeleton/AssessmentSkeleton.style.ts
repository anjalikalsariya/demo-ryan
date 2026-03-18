import styled from "@emotion/styled";

const shimmerBg = `
  background: linear-gradient(90deg, var(--color-secondary-hover) 25%, var(--color-secondary) 50%, var(--color-secondary-hover) 75%);
  background-size: 800px 100%;
  animation: shimmer 1.4s ease-in-out infinite;
`;

export const SkeletonCard = styled.div`
  background: var(--color-white);
  border: 1px solid var(--color-secondary-hover);
  border-radius: 12px;
  padding: 6px 20px;
  margin-bottom: 12px;

  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`;

export const Bone = styled.div<{ width?: string; height?: string; radius?: string }>`
  ${shimmerBg}
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "12px" }) => height};
  border-radius: ${({ radius = "4px" }) => radius};
  flex-shrink: 0;

  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
`;

export const SkeletonHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const SkeletonHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  flex-shrink: 0;
`;

export const SkeletonLastActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`;

export const SkeletonDataBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 32px 0 32px;
  gap: 16px;
`;

export const SkeletonDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SkeletonProgressRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0;
  padding-bottom: 10px;
`;

export const SkeletonSection = styled.div<{ compact?: boolean }>`
  flex: ${({ compact }) => (compact ? "0 0 auto" : "1")};
  padding: 0 14px;
  border-right: 1px solid var(--color-secondary-hover);
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
    border-right: none;
  }
`;

export const SkeletonBarRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;
