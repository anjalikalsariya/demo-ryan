import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 4px 14px;
  background: var(--color-white);
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 220px;
  font-size: 14px;
  background: transparent;
`;
