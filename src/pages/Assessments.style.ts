import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1244px;
  width: 100%;
  margin: 0 auto;
  padding: 24px 32px;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ErrorMessage = styled.p`
  color: var(--color-error);
  padding: 16px 0;
`;
