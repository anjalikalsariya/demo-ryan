import React, { type JSX, type ReactNode } from "react";
import { StyledText, type Variant, type Weight } from "./Text.style";


type Props = {
  children: ReactNode;
  variant?: Variant;
  weight?: Weight;
  color?: string;
  align?: string;
  as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLElement>;


export default function Text({
  children,
  variant = "lg",
  weight = "regular",
  color,
  as = "span",
  ...rest
}: Props) {
  return (
    <StyledText as={as} variant={variant} weight={weight} color={color} {...rest}>
      {children}
    </StyledText>
  );
}