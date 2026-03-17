import styled from "@emotion/styled";

export const Switch = styled.div<{ checked: boolean }>`
  width: 32px;
  height: 19px;
  background: ${({ checked }) =>
    checked ? "var(--color-toggle-active)" : "var(--color-toggle-inactive)"};
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  transition: 0.3s;
`;

export const Knob = styled.div<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  background: var(--color-white);
  border-radius: 50%;
  transform: ${({ checked }) =>
    checked ? "translateX(13px)" : "translateX(0)"};
  transition: 0.3s;
`;
