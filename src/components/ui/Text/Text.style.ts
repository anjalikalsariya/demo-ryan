import styled from "@emotion/styled";

export type Variant = "header" | "xl" | "lg" | "md" | "sm" | "xs" | "xxs";

export type Weight = "regular" | "medium" | "semiBold" | "bold";

const variantStyles: Record<Variant, string> = {
  header: `
    font-size: 20px;
    line-height: 28px;
  `,
  xl: `
    font-size: 18px;
    line-height: 26px;
  `,
  lg: `
    font-size: 16px;
    line-height: 22px;
  `,
  md: `
    font-size: 15px;
    line-height: 22px;
  `,
  sm: `
    font-size: 14px;
    line-height: 20px;
  `,
  xs: `
    font-size: 13px;
    line-height: 18px;
  `,
  xxs: `
    font-size: 12px;
    line-height: 16px;
  `,
};

const weightStyles = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};



export const StyledText = styled.span<{
  variant: Variant;
  weight: Weight;
  color?: string;
  align?: string;
}>`
  margin: 0;
  padding: 0;
  ${({ variant }) => variantStyles[variant]}
  font-weight: ${({ weight }) => weightStyles[weight]};
  color: ${({ color }) => color || "var(--color-text)"};
  text-align: ${({ align }) => align || "left"};
`;
