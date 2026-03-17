import styled from "@emotion/styled";

export const Container = styled.div`
  width: 64px;
  height: 13px;
  background: var(--color-track-bg);
  border-radius: 10px;
  overflow: hidden;
`;

export const Fill = styled.div<{ width: number; color?: string }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background: ${({ color }) => color || "var(--color-primary)"};
  transition: width 0.7s ease-out;
`;
