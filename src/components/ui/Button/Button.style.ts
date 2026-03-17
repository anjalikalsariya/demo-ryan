// src/components/ui/Button.tsx
import styled from "@emotion/styled";

type Variant = "primary" | "secondary";

export const StyledButton = styled.button<{ variant: Variant }>`
  padding: 6px 16px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;

  background: ${({ variant }) =>
    variant === "primary" ? "var(--color-button-primary)" : "var(--color-secondary)"};
  color: ${({ variant }) =>
    variant === "primary" ? "var(--color-white)" : "var(--color-text-secondary)"};

  &:hover {
    background: ${({ variant }) =>
      variant === "primary" ? "var(--color-primary-hover)" : "var(--color-secondary-hover)"};
  }
`;
